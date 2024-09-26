import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SisLoginRequest } from '../../../core/requests/sis-login-request';
import { RouterLink } from '@angular/router';
import { SisGoogleAuthService } from '../../../core/services/auth-services/sis-google-auth.service';
import { environment } from '../../../../environments/environment';
import { SisLoginService } from '../../../core/services/auth-services/sis-login.service';
import { SisAuthService } from '../../../core/services/auth-services/sis-auth.service';

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
    private authService: SisAuthService,
    private googleAuth: SisGoogleAuthService
  ) { }

  userForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    clave: new FormControl('', [Validators.required])
  });

  check_remember = new FormControl(false) // Inicia en false

  showGoogleData(){
    const data = this.googleAuth.getProfile();
    
    console.log(data);
    
  }

  data_google !: any;

  ngOnInit() {
   
  }

  loginGoogle() {
    
    sessionStorage.setItem(environment.isLogin,true+'')
    this.googleAuth.login();
  }

  login() {

    if (this.userForm.valid) {
      const formulario = this.userForm.value as SisLoginRequest;
      const remember = this.check_remember.value as boolean;

      this.loginService.login(formulario).subscribe({

        next: response => this.authService.startSession(response, remember),
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