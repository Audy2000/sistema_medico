import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SisRegisterService } from '../../../core/services/sis-register.service';
import { SisRegisterRequest } from '../../../core/requests/sis-register-request';
import { SisAuthService } from '../../../core/services/sis-auth.service';
import { environment } from '../../../../environments/environment';
import { SisGoogleAuthService } from '../../../core/services/sis-google-auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sis-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './sis-register.component.html',
  styleUrl: './sis-register.component.css'
})
export class SisRegisterComponent {
  

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

  ngOnInit(){
    const fromGoogleRegister = sessionStorage.getItem(environment.isRegister)
    if(fromGoogleRegister){
      const data_google = this.googleAuth.getProfile();
      const request_incomplete : SisRegisterRequest ={
        apellidos : data_google['family_name'],
        nombres : data_google['given_name'],
        email : data_google['email'],
        cedula :'',
        confirm_password:'',
        fecha_nacimiento: '',
        password:''
      }

      this.miFormulario.setValue(request_incomplete);
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


  starWithGoogle() {
   sessionStorage.setItem(environment.isRegister,'true');
    this.googleAuth.login();
  }
}
