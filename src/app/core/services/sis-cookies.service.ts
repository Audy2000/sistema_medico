import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SisCookiesService {

  constructor(
    private cookieService: CookieService
  ) { }

  // Configurar una cookie de sesión (sin fecha de expiración)
  setSessionCookie(name: string, value: string): void {
    this.cookieService.set(name, value); // No se especifica la fecha de expiración
  }

   // Guarda un valor en una cookie, por defecto es de sesion
   // pero prefiero utilizar la funcion de arriba
   // por eso comento esta
   private setCookie(name: string, value: string, expireDays: number = 0): void {
    this.cookieService.set(name, value, expireDays);
  }

  // Recupera un valor de una cookie
  getCookie(name: string): string | null {
    return this.cookieService.get(name);
  }

  // Elimina una cookie
  deleteCookie(name: string): void {
    this.cookieService.delete(name);
  }

  // Elimina todas las cookies
  deleteAllCookies(): void {
    this.cookieService.deleteAll();
  }

  isCookieExist(name: string): boolean {
    return this.cookieService.check(name);
  }
}
