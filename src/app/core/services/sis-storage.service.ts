import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SisStorageService {

  constructor() { }

   // Función para guardar datos en localStorage
   guardarDato(key: string, valor: any): void {
    localStorage.setItem(key, JSON.stringify(valor));
  }

  // Función para obtener datos de localStorage
  obtenerDato<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  // Función para eliminar datos de localStorage
  eliminarDato(key: string): void {
    localStorage.removeItem(key);
  }
}
