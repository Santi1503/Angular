import { Component } from '@angular/core';
//import { CarritoComponent } from './componentes/carrito/carrito.component';
import { PadreComponent } from './components/padre/padre.component';

@Component({
  selector: 'app-root',
  imports: [PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aprendiendo';
}
