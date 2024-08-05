import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoguinService } from '../loguin.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoguinService);
  const router = inject(Router);

  if(loginService.logeado) {
    if(loginService.usuario.role === 'ADMIN') {
      router.navigateByUrl('/pages/home');
    }

    if(loginService.usuario.role === 'FINZ') {
      router.navigateByUrl('/pages/cash-outlay');
    }
    return false;
  } else {
    return true;
  }

};
