import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SisSweetAlertService {

  constructor() { }

  private confirm !: boolean;

  async deleteConfirm(): Promise<boolean> {
    const result = await Swal.fire({
      title: "¿Seguro desea eliminar?",
      text: "¡No podrá revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar"
    });
    //console.log(result);
    
    return result.isConfirmed;

  }

  error(mensaje:string)
  {
    Swal.fire({
      title: "Error",
      text: mensaje,
      icon: "error"
    });
  }

  success(mensaje: string) {
    Swal.fire({
      title: "Correcto",
      text: mensaje,
      icon: "success"
    });
  }

}
