import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SisLoginService } from '../services/sis-login.service';
import { SisAuthService } from '../services/sis-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(SisAuthService);
  const router = inject(Router);
  
  if (auth.checkIsLogin()) 
  {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
