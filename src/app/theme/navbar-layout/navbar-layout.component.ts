import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';
import { SisAuthService } from '../../core/services/auth-services/sis-auth.service';
import { SisGoogleAuthService } from '../../core/services/auth-services/sis-google-auth.service';

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
    private googleService: SisGoogleAuthService,
  ) { }

  logout() {
    this.authService.endSession();
    this.googleService.logout();
  }


  ocultaSidebar() {
    // Aqui vendra la logica cuando se haga click
    // en el boton para cerrar el sidebar
    this.ocultarSidebar.emit(true);
  }
}
