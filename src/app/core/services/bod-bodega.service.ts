import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodBodega } from '../models/bod-bodega';
import { SisGeneralResponse } from '../models/sis-general-response';
import { SisAuthService } from './sis-auth.service';

@Injectable({
  providedIn: 'root'
})
export class BodBodegaService {

  private url ="bodBodega";
   
  constructor(
    private http:HttpClient,
    private authService: SisAuthService
  ) { }

  get(periodo:string, codigo:number) : Observable<SisGeneralResponse<BodBodega>>
  {
    return this.http.get<SisGeneralResponse<BodBodega>>(`${this.url}/${periodo}/${codigo}`);

  }

  getAll():Observable<SisGeneralResponse<BodBodega[]>>
  {
    
    const periodo = this.authService.getPeriodo;
   return this.http.get<SisGeneralResponse<BodBodega[]>>(`${this.url}/${periodo}`);
  }

  create(bodega : BodBodega):Observable<BodBodega>{
    return this.http.post<BodBodega>(this.url,bodega);
  }

  edit(periodo:string, codigo:number, bodega:BodBodega):Observable<SisGeneralResponse<BodBodega>>
  {
    return this.http.put<SisGeneralResponse<BodBodega>>(`${this.url}/${periodo}/${codigo}`,bodega);
  }

  delete(periodo:string, codigo:number):Observable<SisGeneralResponse<BodBodega>>
  {
    return this.http.delete<SisGeneralResponse<BodBodega>>(`${this.url}/${periodo}/${codigo}`);
  }

}
