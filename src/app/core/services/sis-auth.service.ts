import { Injectable } from '@angular/core';
import { SisLocalUserData } from '../models/sis-local-user-data';
import { environment } from '../../../environments/environment';
import { SisCookiesService } from './sis-cookies.service';
import { SisStorageService } from './sis-storage.service';
import { Router } from '@angular/router';
import { SisGoogleAuthService } from './sis-google-auth.service';
import { aluve_fakeResponse_UserData } from './sis-login.service';

@Injectable({
  providedIn: 'root'
})
export class SisAuthService {


  constructor(
    private storage: SisStorageService,
    private cookiesService: SisCookiesService,
    private router: Router,
    //private authGoogleService: SisGoogleAuthService,
  ) { 
    
  }
  // ===============================================================
  //              Variables privadas
  // ===============================================================
  private userData: SisLocalUserData | null = null;

  // ===============================================================
  //              Propiedades get
  // ===============================================================
  private get remember(): boolean {
    const remember = this.storage.obtenerDato<boolean>(environment.remember_session_key);
    return remember === null ? false : remember;
  }
  private get data_usuario_ls(): SisLocalUserData {
    return this.storage
      .obtenerDato<SisLocalUserData>
      (environment.user_data_key) as SisLocalUserData;
  }

  private get data_usuario_cookies(): SisLocalUserData {
    return this.storage
      .obtenerDato<SisLocalUserData>
      (environment.user_data_key) as SisLocalUserData;
  }

  private get existUserDataCookie(): boolean {
    return this.cookiesService.isCookieExist(environment.user_data_key)
  }


  get getUserData(): SisLocalUserData {
    // 1. Se verifica si no esta en memoria
    if (this.userData !== null) { return this.userData; }

    // 2. Se verifica en el local storage
    if (this.remember === true && this.data_usuario_ls !== null) {
      // 2.1 Se guarda en memoria
      this.userData = this.data_usuario_ls;
      return this.data_usuario_ls;
    }
    // Se verifica en las cookies
    this.userData = this.data_usuario_cookies;
    return this.data_usuario_cookies;

  }

  get getPeriodo(): string {
    return this.getUserData.periodo;
  }
  // ===============================================================

  startSession(response: SisLocalUserData, remember: boolean = false) {
    
    response.time_start = new Date();
    if (remember === true) {
      this.storage.guardarDato(environment.user_data_key, response);
      this.storage.guardarDato(environment.remember_session_key, remember);
    } else {
      this.cookiesService.setSessionCookie(environment.user_data_key, response);
    }
    this.userData = response; // Se guarda en memoria
    this.router.navigate(['/dashboard']);
  }


  endSession(): void {
    sessionStorage.removeItem(environment.isRegister);
    sessionStorage.removeItem(environment.isLogin);
    this.storage.eliminarDato(environment.remember_session_key)
    this.storage.eliminarDato(environment.user_data_key)
    this.cookiesService.deleteCookie(environment.user_data_key)
    this.userData;
    this.router.navigate(['/login']);
  }


  setNewTokenRefresh(data: SisLocalUserData) {
    // Se verifica en el local storage
    if (this.remember === true) {
      this.storage.guardarDato(environment.user_data_key, data);
    }
    else {
      this.cookiesService.setSessionCookie(environment.user_data_key, data);
    }
  }

  /**
   * Valida que la sesion este activa
   * @returns Retorna true o false si el usuario ha iniciado sesion
   */
  checkIsLogin() {

    // Se verifica en el local storage
    if (this.remember === true && this.data_usuario_ls !== null) {
      return true;
    }

    // Se verifica en las cookies
    if (this.existUserDataCookie) {
      return true;
    }
    return false;
  }

  // ===============================================================
  //              CONFIGURACION GOOGLE
  // ===============================================================

 
}
