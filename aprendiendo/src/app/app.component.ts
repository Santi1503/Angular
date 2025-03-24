import { Component } from '@angular/core';
//import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CarritoSignalsComponent } from './components/carrito-signals/carrito-signals.component';

@Component({
  selector: 'app-root',
  imports: [CarritoSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aprendiendo';
}
