import { Injectable } from "@angular/core";

/**
 * 
 * Autor: Audy Wagner Lucas Vera
 * Fecha: 04-09-2024
 * Descripcion: Validaciones y consultas a servicios ecuatorianos
 */
@Injectable({
    providedIn: 'root'
  })
  export class SisCedulaEcuatorianaService {

    validarCedula(cedula: string): boolean {
        // Verifica que la cédula tenga exactamente 10 dígitos
        if (!/^\d{10}$/.test(cedula)) {
            return false;
        }
    
        const provincia = parseInt(cedula.substring(0, 2), 10);
        // Verifica que el primer dígito del número de cédula sea un valor válido
        if (provincia < 1 || provincia > 24) {
            return false;
        }
    
        const digitos = cedula.split('').map(digit => parseInt(digit, 10));
    
        // Verifica que el tercer dígito (el que indica el tipo de cédula) sea 6 (para ciudadanos) o 9 (para extranjeros)
        if (digitos[2] < 0 || digitos[2] > 9) {
            return false;
        }
    
        const digitoVerificador = digitos[9];
    
        // Cálculo del dígito verificador
        let suma = 0;
        for (let i = 0; i < 9; i++) {
            if (i % 2 === 0) {
                const doble = digitos[i] * 2;
                suma += (doble > 9) ? (doble - 9) : doble;
            } else {
                suma += digitos[i];
            }
        }
    
        const modulo = suma % 10;
        const digitoVerificadorCalculado = (modulo === 0) ? 0 : 10 - modulo;
    
        // Verifica si el dígito verificador coincide
        return digitoVerificador === digitoVerificadorCalculado;
    }
  }