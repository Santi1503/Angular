import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  cantidadProductos:number = 0;
  totalCarrito:number = 0;
  notificacion:string = "";

  precioBase:number = 37;
  cuponAplicado:boolean = false;


  ngOnInit(){
    this.comprobarNotificacion()
  }

  ngDoCheck(){
  }

  addProducto(){
    this.cantidadProductos += 1;
    this.totalCarrito += this.precioBase;

    console.log("Cantidad de productos: " + this.cantidadProductos);
    console.log("Total del carrito: " + this.totalCarrito);
    this.comprobarNotificacion()
  }

  add5Productos(){
    this.cantidadProductos += 5;
    this.totalCarrito += this.precioBase * 5;
    console.log("Cantidad de productos: " + this.cantidadProductos);
    console.log("Total del carrito: " + this.totalCarrito);
    this.comprobarNotificacion()
  }

  cupon(){
    if (this.cantidadProductos > 0) {
      if (!this.cuponAplicado) {
        this.cuponAplicado = true;
        this.notificacion = "¡Cupón del 20% aplicado correctamente!";
        this.totalCarrito *= 0.8;
        console.log("Total del carrito: " + this.totalCarrito);
        this.comprobarNotificacion();
      } else {
        alert("Ya has aplicado un cupón anteriormente");
      }
    } else {
      alert("No hay productos en el carrito");
    }
    
  }

  removeProducto(){
    if (this.cantidadProductos > 0) {
      this.cantidadProductos -= 1;
      this.totalCarrito -= this.precioBase;
      console.log("Cantidad de productos: " + this.cantidadProductos);
      console.log("Total del carrito: " + this.totalCarrito);
      this.comprobarNotificacion()
    }
  }

  emptyCart(){
    this.cantidadProductos = 0;
    this.totalCarrito = 0;
    alert("Carrito vacío")
    this.comprobarNotificacion()
  }

  comprobarNotificacion(){
    let limitePrecio = 177
    if (this.totalCarrito > limitePrecio) {
      this.notificacion = `¡Has superado el límite de ${limitePrecio}! Total carrito: ${this.totalCarrito}€`;
    } else {
      this.notificacion = "";
    }
  }
}
