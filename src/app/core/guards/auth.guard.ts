import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SisLoginService } from '../services/sis-login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(SisLoginService);
  const router = inject(Router);
  
  if (auth.checkIsLogin()) 
  {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
