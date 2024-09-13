import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SisGoogleAuthService } from '../../../core/services/sis-google-auth.service';
import { aluve_fakeResponse_UserData } from '../../../core/services/sis-login.service';
import { SisAuthService } from '../../../core/services/sis-auth.service';
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
    private aluveAuth : SisAuthService
  ){}

  showGoogleData(){
    const data = this.googleAuth.getProfile();
    
    console.log(data);
    
  }


  ngOnInit(){
    const isLogin = sessionStorage.getItem(environment.isLogin) as boolean | null

    if(isLogin!==null && isLogin!==true){
      console.log('viene del login');
      const data_usuario = this.googleAuth.getProfile();
      
      const info_login = aluve_fakeResponse_UserData(data_usuario['name'])
      // por defecto cuando inicie sesion con google, la sesion quede almacenada
      this.aluveAuth.startSession(info_login,true)
      
      
    }
  }

}
