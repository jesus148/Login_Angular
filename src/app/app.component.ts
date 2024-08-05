import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoguinService } from './services/loguin.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend';

  private loginService = inject(LoguinService);


  // inicia
  ngOnInit() {
    if(localStorage.getItem('usuario')) {
      this.loginService.logeado = true;
      this.loginService.usuario = JSON.parse(localStorage.getItem('usuario') || '');
    }
  }







}
