import { Component, EventEmitter, Output, output } from '@angular/core';
import { SisStorageService } from '../../core/services/sis-storage.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [],
  templateUrl: './navbar-layout.component.html',
  styleUrl: './navbar-layout.component.css'
})
export class NavbarLayoutComponent {

  @Output() ocultarSidebar = new EventEmitter<boolean>();

  constructor(
    private storage: SisStorageService,
    private router: Router,
  ) {}
  logout(){
    this.storage.eliminarDato(environment.user_data_key)
    this.router.navigate(['/login']);
  }


  ocultaSidebar()
  {
    // Aqui vendra la logica cuando se haga click
    // en el boton para cerrar el sidebar
    this.ocultarSidebar.emit(true);
  }
}
