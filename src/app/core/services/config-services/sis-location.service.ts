
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  /*
  Autor: Audy Lucas
  Descripcion: Este servicio es para trackear
  al usuario, saber el navegador que se conecta
  y tambien obtiene la ip publica de donde se
  conecta, esto se va a guardar en el campo
  pc de la base de datos, debido a que no se
  puede obtener de aqui el nombre del equipo
  */
@Injectable({
  providedIn: 'root'
})
export class SisLocationService {

  userAgent: string;
  publicIp:string='';

  constructor(private http: HttpClient) { 
    this.userAgent = navigator.userAgent;
    
  }

  detectBrowser(): string {
    if (this.userAgent.indexOf('Chrome') !== -1 && this.userAgent.indexOf('Edge') === -1 && this.userAgent.indexOf('OPR') === -1) {
      return 'Google Chrome';
    } else if (this.userAgent.indexOf('Firefox') !== -1) {
      return 'Mozilla Firefox';
    } else if (this.userAgent.indexOf('Safari') !== -1 && this.userAgent.indexOf('Chrome') === -1) {
      return 'Apple Safari';
    } else if (this.userAgent.indexOf('Edge') !== -1) {
      return 'Microsoft Edge';
    } else if (this.userAgent.indexOf('OPR') !== -1 || this.userAgent.indexOf('Opera') !== -1) {
      return 'Opera';
    } else if (this.userAgent.indexOf('MSIE') !== -1 || this.userAgent.indexOf('Trident') !== -1) {
      return 'Internet Explorer';
    } else {
      return 'Unknown Browser';
    }
  }

  detectOperatingSystem(): string {
    const ua = this.userAgent.toLowerCase();

    if (/windows nt 10.0/.test(ua)) return 'Windows 10';
    if (/windows nt 6.3/.test(ua)) return 'Windows 8.1';
    if (/windows nt 6.2/.test(ua)) return 'Windows 8';
    if (/windows nt 6.1/.test(ua)) return 'Windows 7';
    if (/windows nt 6.0/.test(ua)) return 'Windows Vista';
    if (/windows nt 5.1/.test(ua)) return 'Windows XP';
    if (/mac os x/.test(ua)) return 'Mac OS X';
    if (/android/.test(ua)) return 'Android';
    if (/linux/.test(ua)) return 'Linux';
    if (/iphone|ipad|ipod/.test(ua)) return 'iOS';

    return 'Unknown OS';
  }

  
    
     
      
  

  getPCData():string{
    return `${this.detectBrowser()};${this.detectOperatingSystem()};`
  }

}
