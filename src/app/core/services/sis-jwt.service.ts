import { Injectable } from '@angular/core';
import { SisLocalUserData, SisRefreshToken } from '../models/sis-local-user-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SisAuthService } from './sis-auth.service';


@Injectable({
  providedIn: 'root'
})
export class SisJwtService {

  // Esta variable es para que no entre en unbucle infinito cuando se refresca el token
  estaRefrescando :boolean = false;



  constructor(
    private http:HttpClient,
    private authService : SisAuthService,
  ) { }

  
  saveRefreshToken(oldData: SisLocalUserData, newData:SisRefreshToken)
  {
    oldData.token = newData.token;
    oldData.expires_in = newData.expires_in;
    oldData.token_type = newData.token_type;
    oldData.time_start = new Date();
    // Se guarda en localstorage
    this.authService.setNewTokenRefresh(oldData);

    // Se desactiva, para poder refrecar denuevo
    this.estaRefrescando = false; 
  }

  refreshToken(local: SisLocalUserData) : Observable<SisRefreshToken>
  {
    const url:string = "auth/refresh";
    // Se activa, para evitar un bucle de consultas
    this.estaRefrescando= true;
    // Se consulta el token refrescado
    return this.http.post<SisRefreshToken>(url,'');

  }


  isTokenValid(data : SisLocalUserData): boolean {
   
    if(data!=null)
    {
      const fecha_token = data.time_start
    
      const resta_fechas_sg =(new Date().getTime() - new Date(fecha_token).getTime() )/1000;
      
      if(resta_fechas_sg>data.expires_in)
      {
        return false;
      }
      return true;
    }
    
    
    return true;
    
  }
}
