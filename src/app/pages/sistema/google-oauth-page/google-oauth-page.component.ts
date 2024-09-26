import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SisGoogleAuthService } from '../../../core/services/auth-services/sis-google-auth.service';
import { SisAuthService } from '../../../core/services/auth-services/sis-auth.service';
import { aluve_fakeResponse_UserData } from '../../../core/services/auth-services/sis-login.service';
import { Router } from '@angular/router';

/**
 * Fecha: 12-09-2024
 * @author Audy Wagner Lucas Vera
 * @description Este componente es una pagina en blanco a la que se redirecciona en google
 * se utiliza para iniciar sesion o para registrarse, desde esta pagina se va a decidir a cual
 * servicio se redirecciona
 */
@Component({
  selector: 'app-google-oauth-page',
  standalone: true,
  imports: [],
  templateUrl: './google-oauth-page.component.html',
  styleUrl: './google-oauth-page.component.css'
})
export class GoogleOauthPageComponent {
  nombre_sistema: string = environment.NOMBRE_SISTEMA;

  constructor(
    private googleAuth : SisGoogleAuthService,
    private aluveAuth : SisAuthService,
    private router : Router
  ){}

  showGoogleData(){
    const data = this.googleAuth.getProfile();
    
    console.log(data);
    
  }


  ngOnInit(){

    
    const isLogin = sessionStorage.getItem(environment.isLogin) as boolean | null
    const fromRegister = sessionStorage.getItem(environment.isRegister) as boolean | null
    
    const data_usuario = this.googleAuth.getProfile();
    sessionStorage.setItem(environment.google_data,JSON.stringify(data_usuario))    
    if(isLogin!==null){
      
      const info_login = aluve_fakeResponse_UserData(data_usuario['given_name'])
      // por defecto cuando inicie sesion con google, la sesion quede almacenada
      this.aluveAuth.startSession(info_login,true)
    }

    if(fromRegister!==null){
      console.log('viene del registro de usuario');
      // redirige a la pagina de registro de sesion
      // consulta la data de google y la pone en el form
      this.router.navigate(['/register']);
    }
  }

}
