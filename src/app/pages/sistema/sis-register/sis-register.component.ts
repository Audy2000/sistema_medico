import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SisRegisterService } from '../../../core/services/auth-services/sis-register.service';
import { SisRegisterRequest } from '../../../core/requests/sis-register-request';
import { SisAuthService } from '../../../core/services/auth-services/sis-auth.service';
import { environment } from '../../../../environments/environment';
import { SisGoogleAuthService } from '../../../core/services/auth-services/sis-google-auth.service';
import { RouterLink } from '@angular/router';
import { GoogleAuthResponse } from '../../../core/responses/google-auth-response';
import { ftValidarCedulaEcuatoriana } from '../../../core/services/validaciones-services/ft-valida-cedula-ecuatoriana';

@Component({
  selector: 'app-sis-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './sis-register.component.html',
  styleUrl: './sis-register.component.css'
})
export class SisRegisterComponent {
  
  google_data! : GoogleAuthResponse;
  temp_user_data ! : SisRegisterRequest;

  async consultaInfoPersona() {
    
    
    const cedula = this.miFormulario.get('cedula')?.value; 
    if(cedula &&!ftValidarCedulaEcuatoriana(cedula)){
      alert('Ingrese Un número de cedula Válido')
      this.miFormulario.controls['cedula']?.setValue('')
      return;
    }
    if(!cedula){return ;}
    const info = await this.registerService.getInfoPersona(cedula);
    const formCreado= this.createForm(info.apellidos,info.nombres,'',cedula,info.fechaNacimiento);
    this.miFormulario.setValue(formCreado);

  }
  

  miFormulario: FormGroup = this.fb.group({
    cedula: ['', Validators.required],
    fecha_nacimiento: [, Validators.required],
    nombres: [, Validators.required],
    apellidos: [, Validators.required],
    email: [, Validators.required],
    password: [, Validators.required],
    confirm_password: [, Validators.required],

  });

  constructor(
    private fb: FormBuilder,
    private registerService: SisRegisterService,
    private auth: SisAuthService,
    private googleAuth: SisGoogleAuthService
  ) { }
  private form_enviado = false;

  getControlClass(controlName: string): string {
    if (this.form_enviado) {
      const control = this.miFormulario.get(controlName);
      if (control?.invalid) { //&& control.touched
        return 'is-invalid';
      }
      else if (control?.valid) {
        return 'is-valid';
      }
    }
    return '';
  }

  createForm(apellidos:string, nombres:string, email:string ='', cedula:string, fecha_nacimiento:Date|undefined){
    const formRequest : SisRegisterRequest ={
      apellidos : apellidos,
      nombres : nombres,
      email : email,
      cedula :cedula,
      fecha_nacimiento: fecha_nacimiento,
      confirm_password:'',
      password:''
    }
    return formRequest;
  }

  ngOnInit(){
    const fromGoogleRegister = sessionStorage.getItem(environment.isRegister)
    
    if(fromGoogleRegister){
      sessionStorage.removeItem(environment.isRegister)
      const data_google = sessionStorage.getItem(environment.google_data);
      const temp_data = sessionStorage.getItem('save_temp_user_data');

      if(temp_data){
        this.temp_user_data = JSON.parse(temp_data) as SisRegisterRequest
      }
      
      if(data_google){
        this.google_data = JSON.parse(data_google) as GoogleAuthResponse
      }
      
      const formLleno = this.createForm(
        this.temp_user_data.apellidos,
        this.temp_user_data.nombres,
        this.google_data.email,
        this.temp_user_data.cedula,
        this.temp_user_data.fecha_nacimiento
      )

      this.miFormulario.setValue(formLleno)

    }
  }

  onSubmit() {
    this.form_enviado = true;

    if (this.miFormulario.valid) {
      const formulario = this.miFormulario.value as SisRegisterRequest
      this.registerService.registerUser(formulario).subscribe({
        next: data => this.auth.startSession(data)
      });
    }

  }


  /**
   * Fecha: 25/09/2024
   * Primero Hay que validar que el usuario haya colocado la cedula, 
   * significa que ya ha llenado los otros campos como la fecha de nacimiento y nombres
   * Si este campo está incompleto, se manda una alerta que tiene que llenarlo
   * ------------------------------------------------------------------------------------
   * En el codigo se configura el sessionStorage, para que cuando regrese a esta pagina
   * de registro, se sepa que ya viene de autenticarse con google y puede obtener la información
   * De la cuenta de google se obtiene solamente (por ahora), la foto y el email
   * de ahi se retorna para que coloque una contrasenia.
   * 
   */
  starWithGoogle() {
   
    const cedula = this.miFormulario.get('cedula')?.value;
    if(!cedula){
      alert('Debe ingresar primero su Cedula y buscar sus datos')
      return;
    }
    

    sessionStorage.setItem(environment.isRegister,'true');
    sessionStorage.setItem('save_temp_user_data',JSON.stringify(this.miFormulario.value));
    this.googleAuth.login();
  }
}
