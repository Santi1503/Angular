import { Component } from '@angular/core';
import { CarritoComponent } from './componentes/carrito/carrito.component';

@Component({
  selector: 'app-root',
  imports: [CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aprendiendo';
}
