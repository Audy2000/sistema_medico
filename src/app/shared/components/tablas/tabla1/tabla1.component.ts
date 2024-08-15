import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableData } from '../TablaModel';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [],
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component {

  @Input() tableData!: TableData;
  @Output() codigoEliminar:EventEmitter<any> = new EventEmitter();
  @Output() codigoActualizar:EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit()
  {

  }

  editar(id:any)
  {
    this.codigoActualizar.emit(id);

    
  }

  eliminar(id:any)
  {
    this.codigoEliminar.emit(id);
    //alert('el codigo es: '+id)
  }
}
