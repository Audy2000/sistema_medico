import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SisCookiesService } from './sis-cookies.service';
import { SisLocalUserData } from '../models/sis-local-user-data';
import { SisLoginRequest } from '../requests/sis-login-request';

export const aluve_fakeResponse_UserData = (username:string='Usuario Prueba') : SisLocalUserData => {
  return {
    token:'dfadfasgadsvzdrvsrve',
    token_type:'bearer',
    time_start: new Date(),
    expires_in:159, // segundos
    username: username,
    periodo:'001',
    roles : []
  }
   
}

@Injectable({
  providedIn: 'root'
})
export class SisLoginService {

  private url = environment.BASE_URL + "auth/";


  constructor(
    private http: HttpClient,
    private cookieService:SisCookiesService,
  ) { }

  private loginResponse?: SisLocalUserData;

  login(loginRequest: SisLoginRequest): Observable<SisLocalUserData> {
    // Aqui se hace la peticion a la api
    // para devolver el objeto
    // Devuelve: token, usuario, periodo, roles y permisos
    
    //return this.http.post<SisLocalUserData>(this.url + 'login', loginRequest);
    
    // Descomentar la linea de abajo para pruebas sin api
    return of<SisLocalUserData>(aluve_fakeResponse_UserData());
  }

  

  // Creo que este se puede eliminar
  checkIsLogin(): boolean {
    // Aqui se valida si el token es valido todavia
    // por ahora solo se valida que exista en el localstorage
    /*if (this.storage.obtenerDato<SisLocalUserData>(environment.user_data_key) !== null) {
      return true;
    }*/
   
      //voy a validar que exista la cookie
    if(this.cookieService.isCookieExist('token')){
      return true;
    }
    return false;

  }




}
/*
this.loginResponse = {
  token: 'lZuDAAazDvgdkh8O1FUpkaHAsjz8m3cbKHQ9H1cdRdr5PGxou0YtuzOxaBIPyxRl',
  username: usuario,
  periodo: '001'
}*/