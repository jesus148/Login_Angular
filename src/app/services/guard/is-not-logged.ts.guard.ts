import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoguinService } from '../loguin.service';

export const isNotLoggedGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoguinService);
  const router = inject(Router);

  if(!loginService.logeado) {
    router.navigateByUrl('/login');
    return false;
  }else {
    return true;
  }

};
