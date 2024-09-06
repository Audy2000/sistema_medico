import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthJwtInterceptor } from './core/interceptors/auth-jwt.interceptor';
import { urlBaseInterceptor } from './core/interceptors/url-base.interceptor';
import { provideOAuthClient } from 'angular-oauth2-oidc';
// ,withInterceptors([AuthJwtInterceptor])
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // para rutas  

    provideHttpClient( // para usar httpClient
      withFetch(),
      withInterceptors([
        AuthJwtInterceptor,
        urlBaseInterceptor
      ])
    ),

    provideOAuthClient(), // Oauth de google
  ]
};
