import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { SisRegisterRequest } from "../../requests/sis-register-request";
import { SisAuthService } from "./sis-auth.service";
import { aluve_fakeResponse_UserData } from "./sis-login.service";
import { firstValueFrom, Observable, of } from "rxjs";
import { SisLocalUserData } from "../../models/sis-local-user-data";
import { HttpClient } from "@angular/common/http";
import { InfoPersonaResponse } from "../../responses/sis-persona-response";

@Injectable({
    providedIn: 'root'
})
export class SisRegisterService {

    constructor(
        private http:HttpClient
    ){}
    private url = environment.BASE_URL;

    
    registerUser(register: SisRegisterRequest): Observable<SisLocalUserData>{
        // aqui se configura la peticion http post de registrar
        // luego de registrar se inicia sesion
        const luego_de_post = aluve_fakeResponse_UserData(register.nombres);
        return of(luego_de_post);

    }

    async getInfoPersona(cedula:string):Promise<InfoPersonaResponse>{
        return firstValueFrom(this.http.get<InfoPersonaResponse>(`${this.url}/consulta-persona/${cedula}`))
        
    }


}