import { Injectable } from '@angular/core';
import { SisLocalUserData } from '../models/sis-local-user-data';
import { SisLoginRequest } from '../models/sis-login-request';
import { SisStorageService } from './sis-storage.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SisLoginService {

  private url = environment.BASE_URL + "auth/";


  constructor(
    private storage: SisStorageService,
    private router: Router,
    private http: HttpClient,
  ) { }

  private loginResponse?: SisLocalUserData;

  login(loginRequest: SisLoginRequest): Observable<SisLocalUserData> {
    // Aqui se hace la peticion a la api
    // para devolver el objeto
    // Devuelve: token, usuario, periodo, roles y permisos
    // Esta data se guarda en local storage

    //return this.http.post<SisLocalUserData>(this.url + 'login', loginRequest);
    
    // Descomentar la linea de abajo para pruebas sin api
    return of<SisLocalUserData>(this.prueba_login);
  }

  prueba_login: SisLocalUserData = {
    token:'dfadfasgadsvzdrvsrve',
    token_type:'bearer',
    time_start: new Date(),
    expires_in:159, // segundos
    username:'audy pruebas',
    periodo:'001',
    roles : [] 
  }

  checkIsLogin(): boolean {
    // Aqui se valida si el token es valido todavia
    // por ahora solo se valida que exista en el localstorage
    if (this.storage.obtenerDato<SisLocalUserData>(environment.user_data_key) !== null) {
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