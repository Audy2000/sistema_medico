import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItemComponent } from '../menu-config/menu-item/menu-item.component';
import { MenuItemLink } from '../menu-config/menu-item';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [RouterLink, MenuItemComponent],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.css'
})
export class SidebarLayoutComponent {
  // Aqui se ponen los enlaces de las rutas
  ruta_principal: string = '/';
  ruta_proximamente :string ='proximamente';

  icono_definiciones ='fa-gear';
  icono_movimientos ='fa-person-running';
  icono_reportes ='fa-table-list';


  inventario_definiciones_icon =this.icono_definiciones;
  inventario_definiciones_items: MenuItemLink[] =[
    {
      nombre: 'Validacion de Médicos',
      ruta: '/administracion/valida-usuario-medico/',
      modulo: 'administracion',
    },
    
  ];

  inventario_reportes_icon =this.icono_reportes;
  inventario_reportes_items : MenuItemLink[] =[
    {
      nombre: 'Item 1',
      ruta: this.ruta_proximamente,
      modulo: 'inventario',
      categoria: 'definiciones'
    },
  ]

  // Aun no esta implementado
  inventario_movimientos_icon =this.icono_movimientos;
  inventario_movimientos_items: MenuItemLink[] =[
    {
      nombre: 'Item 1',
      ruta: this.ruta_proximamente,
      modulo: 'inventario',
      categoria: 'definiciones'
    },
    {
      nombre: 'Item 2',
      ruta: this.ruta_proximamente,
      modulo: 'inventario',
      categoria: 'definiciones'
    }
  ];

  

}
