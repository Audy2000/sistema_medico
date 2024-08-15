import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const urlBaseInterceptor: HttpInterceptorFn = (req, next) => {
  // Obtiene la base URL del entorno
  const baseUrl = environment.BASE_URL.trim();

  // Verifica si la URL ya tiene un esquema (http, https, etc.)
  if (!/^https?:\/\//i.test(req.url)) {
    // Clona la solicitud original y ajusta la URL para incluir la base URL
    req = req.clone({ url: `${baseUrl}${req.url}` });
  }

  // Imprime la URL modificada en la consola para depuración
  console.log(req.url);

  // Pasa la solicitud al siguiente manejador
  return next(req);
};

/*
export const urlBaseInterceptor: HttpInterceptorFn = (req, next) => {
  
  let baseUrl = environment.BASE_URL;

  
  if(!req.url.trim().startsWith('http:'))
  {
    
    req = req.clone({ url: `${baseUrl.trim()}${req.url}` })
    

  }

  console.log(req.url);
  return next(req);
};
*/