import { Component } from '@angular/core';
import { SisLoginService } from '../../../core/services/sis-login.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SisLoginRequest } from '../../../core/models/sis-login-request';
import { HttpErrorResponse } from '@angular/common/http';
import { SisErrorLogin } from '../../../core/models/sis-local-user-data';
import { SisStorageService } from '../../../core/services/sis-storage.service';
import { environment } from '../../../../environments/environment';
import { Router, RouterLink } from '@angular/router';
import { SisGoogleAuthService } from '../../../core/services/sis-google-auth.service';

@Component({
  selector: 'app-sis-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sis-login.component.html',
  styleUrl: './sis-login.component.css'
})
export class SisLoginComponent {


  constructor(
    private loginService: SisLoginService,
    private storage: SisStorageService,
    private router: Router,
    private authGoogleService: SisGoogleAuthService
  ) { }

  userForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    clave: new FormControl('', [Validators.required])
  });

  data_google !:any;

  ngOnInit()
  {
    const google_datos = this.authGoogleService.getProfile();
    this.data_google= google_datos;
    console.log(google_datos);
    

  }

  loginGoogle(){
    this.authGoogleService.login();
  }

  login() {

    if (this.userForm.valid) {
      const formulario = this.userForm.value as SisLoginRequest;

     
      this.loginService.login(formulario).subscribe({

        next: response => {
          response.time_start = new Date();
          this.storage.guardarDato(environment.user_data_key, response);
          this.router.navigate(['/dashboard']);
          
        },
        error: error => { 
          // Esta linea de abajo queda mientras encuentro
          // una alernativa a sweet alert
          alert(error.error.message);

          
        }
      });
       
    }
  }

}

// Deshabilita en caso no sea valido el formulario
// [disabled]="!userForm.valid"