import { Component, computed } from '@angular/core';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.component.html',
  styleUrl: './carrito-signals.component.css'
})
export class CarritoSignalsComponent {
  /*contador = signal(0);
  incremento = signal(1);
  contador3 = computed(() => this.contador() * 3);

  aumentar() {
    this.contador.update((valorActual) => valorActual + this.incremento());
  }



  ngOnInit() {
    console.log(this.contador()); // Imprime el valor inicial del contador
  }*/

  cantidadProductos = signal(0);
  totalCarrito = signal(0);
  notificacion = signal("");

  precioBase = signal(37);
  cuponAplicado = signal(false);

  constructor() {
    effect(() => {
      this.comprobarNotificacion();
    });
  }

  addProducto(){
    this.cantidadProductos.update((valorActual) => valorActual + 1);
    this.totalCarrito.update(total => total + this.precioBase());

    console.log("Cantidad de productos: " + this.cantidadProductos());
    console.log("Total del carrito: " + this.totalCarrito());
  }

  add5Productos(){
    this.cantidadProductos.update((valorActual) => valorActual + 5);
    this.totalCarrito.update(total => total + (this.precioBase() * 5));
    console.log("Cantidad de productos: " + this.cantidadProductos());
    console.log("Total del carrito: " + this.totalCarrito());
  }

  cupon(){
    if (this.cantidadProductos() > 0) {
      if (!this.cuponAplicado()) {
        this.cuponAplicado.set(true);
        this.notificacion.set("¡Cupón del 20% aplicado correctamente!");
        this.totalCarrito.update(total => total * 0.8);
        console.log("Total del carrito: " + this.totalCarrito());
      } else {
        alert("Ya has aplicado un cupón anteriormente");
      }
    } else {
      alert("No hay productos en el carrito");
    }
  }

  removeProducto(){
    if (this.cantidadProductos() > 0) {
      this.cantidadProductos.update(cant => cant - 1);
      this.totalCarrito.update(total => total - this.precioBase());
      console.log("Cantidad de productos: " + this.cantidadProductos());
      console.log("Total del carrito: " + this.totalCarrito());
    }
  }

  emptyCart(){
    this.cantidadProductos.set(0);
    this.totalCarrito.set(0);
    this.cuponAplicado.set(false);
    alert("Carrito vacío");
  }

  comprobarNotificacion(){
    let limitePrecio = 177;
    if (this.totalCarrito() > limitePrecio) {
      this.notificacion.set(`¡Has superado el límite de ${limitePrecio}! Total carrito: ${this.totalCarrito()}€`);
    } else {
      this.notificacion.set("");
    }
  }
}
