import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sis-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './sis-register.component.html',
  styleUrl: './sis-register.component.css'
})
export class SisRegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    cedula : [ '',Validators.required],
    fecha_nacimiento : [],
    nombres : [],
    apellidos : [],
    email : [],
    password : [],
    confirm_password : [],

  });

  constructor(private fb: FormBuilder) { }
  private form_enviado = false;

  getControlClass(controlName: string): string {
    if(this.form_enviado){
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

  onSubmit(){
    this.form_enviado = true;
    
    
  }
}
