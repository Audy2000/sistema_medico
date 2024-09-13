import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';
import { SisAuthService } from '../../core/services/sis-auth.service';

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [],
  templateUrl: './navbar-layout.component.html',
  styleUrl: './navbar-layout.component.css'
})
export class NavbarLayoutComponent {

  
  @Output() ocultarSidebar = new EventEmitter<boolean>();
  nombreUsuario = this.authService.getUserData.username;

  constructor(
    private authService: SisAuthService,
  ) { }

  logout() {
    this.authService.endSession();
  }


  ocultaSidebar() {
    // Aqui vendra la logica cuando se haga click
    // en el boton para cerrar el sidebar
    this.ocultarSidebar.emit(true);
  }
}
