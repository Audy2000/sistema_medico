import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SisLocalUserData } from '../models/sis-local-user-data';
import { SisJwtService } from '../services/auth-services/sis-jwt.service';
import { SisAuthService } from '../services/auth-services/sis-auth.service';

export const AuthJwtInterceptor: HttpInterceptorFn = (req, next) => {
  let auth = inject(SisAuthService);
  let jwtService = inject(SisJwtService);
  let data = auth.getUserData;

  // Valida que el token sea valido
  if (!jwtService.isTokenValid(data as SisLocalUserData) && !jwtService.estaRefrescando) 
  {
    // Si el token no es valido, lo refresca
    jwtService.refreshToken(data as SisLocalUserData).subscribe(
    {
      next: (newToken) =>// console.log(newToken)
      
      {
        // despues de refrescarlo, lo actualiza
        data = data as SisLocalUserData;
        jwtService.saveRefreshToken(data, newToken);
        // Mando a recargar la pagina para que se cargue 
        // denuevo el componente
        window.location.reload(); 
        console.log('Token Refrescado');
      }
    });


  }

  if (!/^https?:\/\//i.test(req.url)) {
    // Clona la solicitud original y ajusta la cabecera
    // Solo se agrega la cabeceera si la url ya tiene el formato
    req = req.clone({
      setHeaders: {
        Authorization: `${data?.token_type} ${data?.token} `
      }})
  }


  return next(req);
};
