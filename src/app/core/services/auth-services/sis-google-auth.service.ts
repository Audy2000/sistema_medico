import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SisGoogleAuthService {
 
  constructor(
    private oAuthService: OAuthService
  ) {  this.initLogin(); } // Se llama el metodo en el constructor para que se ejecute
  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false, // para la seguridad
      clientId: '743963770493-297ktdunaebfj5le4tf60om5hgrc4o2s.apps.googleusercontent.com', // Se obtiene desde la consola de google
      redirectUri: window.location.origin+'/OAuth/aluve/google', // Redirige despues del login
      scope: 'openid profile email', // Extrae info de la cuenta de google
      //showDebugInformation: true
    }
    // Se le pasan las configuraciones
    this.oAuthService.configure(config);

    // refresque el token automaticamente antes de caducar
    this.oAuthService.setupAutomaticSilentRefresh();

    // Se hace autenticacion con google
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();

  }

  public getUserInfo(): Observable<any> {
    return new Observable(observer => {
      if (this.oAuthService.hasValidAccessToken()) {
        const userInfo = this.oAuthService.getIdentityClaims();
        observer.next(userInfo);
        observer.complete();
      } else {
        observer.error('No hay un token de acceso válido.');
      }
    });
  }

  login() {
    // Continua el flujo de autenticacion
    //this.oAuthService.initImplicitFlow(); // con este finionaba
    this.oAuthService.initLoginFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    return this.oAuthService.getIdentityClaims();
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }



}
