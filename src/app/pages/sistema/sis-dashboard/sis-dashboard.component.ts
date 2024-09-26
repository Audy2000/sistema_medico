import { Component } from '@angular/core';
import { Tabla1Component } from '../../../shared/components/tablas/tabla1/tabla1.component';
import { TableData } from '../../../shared/components/tablas/TablaModel';
import { SisGoogleAuthService } from '../../../core/services/auth-services/sis-google-auth.service';

@Component({
  selector: 'app-sis-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './sis-dashboard.component.html',
  styleUrl: './sis-dashboard.component.css'
})
export class SisDashboardComponent {

  constructor(
    private authGoogle: SisGoogleAuthService
  ){}
  
  showData(){
    const data = JSON.stringify(this.authGoogle.getProfile());
    console.log(data);
  }
  actualizar(codigo:number)
  {
    console.log(codigo);
    
  }
  eliminar(codigo:string){
    console.log(codigo);

  }

 

  /*
  tableDataPrueba : tableModel<any> = {
      cabecera : ['codigo','campo'],
      cuerpo : this.filas
  };
  */

  

}
