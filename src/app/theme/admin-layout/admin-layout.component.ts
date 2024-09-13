import { RouterOutlet } from '@angular/router';
import { NavbarLayoutComponent } from '../navbar-layout/navbar-layout.component';
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component';
import { FooterLayoutComponent } from '../footer-layout/footer-layout.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SisGoogleAuthService } from '../../core/services/sis-google-auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarLayoutComponent,
    SidebarLayoutComponent,
    FooterLayoutComponent,
    
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent
{

 
  
  
  // ============================================
  // Acciones dle sidebar
  // ============================================
  
  // sb-sidenav-toggled -> muestra sidebar
  claseOcultaSidebar :string =""; // oculta sidebar
  cerrado : boolean = false;
  accionCerrar(){
    // este metodo es para abrir-cerrar el sidebar
    // segun se da click en el navbar
    if(this.claseOcultaSidebar===""){
      this.claseOcultaSidebar = "sb-sidenav-toggled";
    }else{
      this.claseOcultaSidebar = "";
    }
  }

  accionCerrar2(){
    // este metodo, es para cerrar el sidebar
    // cuando se da click fuera del sidebar
    // Logica: Si existe la clase sb-sidenav-toggled
    // y el tamano de la pantalla debe ser menor de 992 px
    // se cumple la condicion
    if(this.claseOcultaSidebar==="sb-sidenav-toggled" && window.innerWidth < 992){
      this.claseOcultaSidebar = "";
    }
  }

  cerrarSidebar($event:boolean){
    this.accionCerrar();
  }
}
