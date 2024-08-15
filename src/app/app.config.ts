import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthJwtInterceptor } from './core/interceptors/auth-jwt.interceptor';
import { urlBaseInterceptor } from './core/interceptors/url-base.interceptor';
// ,withInterceptors([AuthJwtInterceptor])
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  
    provideHttpClient(
      withFetch(),
      withInterceptors([
        AuthJwtInterceptor,
        urlBaseInterceptor
      ])
    )
  ]
};
