import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItemLink } from '../menu-item';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

  @Input() menuItem : MenuItemLink | undefined;
  @Input() icon_class : string | undefined = 'fa-cog';

  // <i class="fa-solid fa-person-running"></i> // persona corriendo
  // <i class="fa-solid fa-warehouse"></i> // bodega
  // <i class="fa-solid fa-toolbox"></i> // Caja de herramientas
  // <i class="fa-solid fa-gear"></i> // Ruedas de configuracion
}
