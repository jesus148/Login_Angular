import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoguinService } from '../services/loguin.service';
import { Router } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CheckboxModule
  ],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})
export class LoguinComponent {



  private loginService = inject(LoguinService);
  private messagesService = inject(MessagesService);




  constructor(
    private router: Router
  ) {}



  showPass: boolean = false;



    // validar
    loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });









  // metodo para registrar
  login() {

    // valida
    if(!this.loginForm.valid) {
      this.messagesService.showWarning('Complete correctamente el formulario de inicio de sesión');
      return;
    }


    // quitanto los espacios
    const usuario = this.loginForm.controls['usuario'].value!.trim();
    const password = this.loginForm.controls['password'].value!.trim();



this.loginService.loguin(usuario, password).subscribe((resp:any) => {
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.loginService.usuario = resp.usuario;
      this.loginService.logeado = true;
      /* this.router.navigate(['pages', 'home'], {queryParams: { p : 0}}); */
      if(resp.usuario.role === 'ADMIN') {
           this.router.navigateByUrl('pages/home');
      }

      if(resp.usuario.role === 'FINZ') {
        this.router.navigateByUrl('pages/cash-outlay');
      }
    }, (err) => {
      this.messagesService.showError(err.error.message);
    });
  }











}
