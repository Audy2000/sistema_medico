import { Component } from '@angular/core';
import { Tabla1Component } from '../../../shared/components/tablas/tabla1/tabla1.component';
import { TableData } from '../../../shared/components/tablas/TablaModel';

@Component({
  selector: 'app-sis-dashboard',
  standalone: true,
  imports: [Tabla1Component],
  templateUrl: './sis-dashboard.component.html',
  styleUrl: './sis-dashboard.component.css'
})
export class SisDashboardComponent {

  actualizar(codigo:number)
  {
    console.log(codigo);
    
  }
  eliminar(codigo:string){
    console.log(codigo);

  }

  tableData: TableData = {
    primaryKey:'name',
    columns: [
      { textoCabecera: 'Codigo', nombreCampo: 'codigo', size: '25' },
      { textoCabecera: 'Nombre', nombreCampo: 'name', size: '50' },
      { textoCabecera: 'Edad', nombreCampo: 'age' },
      { textoCabecera: 'Identificación', nombreCampo: 'id' }
    ],
    rows: [
      { id: 1, name: 'Juan', age: 30, codigo:1 },
      { id: 2, name: 'María', age: 25, codigo:2},
      { id: 3, name: 'Pedro', age: 40, codigo:3 }
    ]
  };

  /*
  tableDataPrueba : tableModel<any> = {
      cabecera : ['codigo','campo'],
      cuerpo : this.filas
  };
  */

  

}
