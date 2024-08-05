import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// verificar pa salir de las carpetas
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoguinService {




  // verifica si esta logeuado
  logeado : boolean = false;

  // el usuario
  usuario: any;



  // construcotr se inicia
  // permite conenctar a un servicio rest
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }




  // loguea el usuario
  loguin(usuario : string , password : string){
    this.http.post( `${environment.base_url}/loguin-wp`, {usuario, password})
  }





  // salir de la sesion
  salir(){

    // salir de la sesion
    localStorage.removeItem('usuario');
    // logueado lo pasa a false
    this.logeado=false;
    // lo redirecciona a otra ruta
    this.router.navigateByUrl('/loguin');

  }




}
