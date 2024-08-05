import { Routes } from '@angular/router';
import { LoguinComponent} from './loguin/loguin.component';

import { isLoggedGuard } from './services/guard/is-logged.guard';
import { isNotLoggedGuard } from './services/guard/is-not-logged.ts.guard';



export const routes: Routes = [

  { path: 'loguin', component: LoguinComponent , canActivate:[isLoggedGuard]} ,
  { path: '**', pathMatch: 'full', redirectTo: 'login' }

];
