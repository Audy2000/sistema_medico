import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { SisRegisterRequest } from "../requests/sis-register-request";
import { SisAuthService } from "./sis-auth.service";
import { aluve_fakeResponse_UserData } from "./sis-login.service";
import { Observable, of } from "rxjs";
import { SisLocalUserData } from "../models/sis-local-user-data";

@Injectable({
    providedIn: 'root'
})
export class SisRegisterService {

    constructor(
        
    ){}
    private url = environment.BASE_URL + "register";



    registerUser(register: SisRegisterRequest): Observable<SisLocalUserData>{
        // aqui se configura la peticion http post de registrar
        // luego de registrar se inicia sesion
        const luego_de_post = aluve_fakeResponse_UserData(register.nombres);
        return of(luego_de_post);

    }


}