import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navegacion-paginas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegacion-paginas.component.html',
  styleUrl: './navegacion-paginas.component.css'
})
export class NavegacionPaginasComponent {

  @Input() urlNuevoRegistro? :string;
  @Input() urlRegresar? :string;
}
