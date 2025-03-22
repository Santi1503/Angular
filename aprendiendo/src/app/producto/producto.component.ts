import { Component } from "@angular/core";
import { PeliculaComponent } from "../pelicula/pelicula.component";
import { VentasComponent } from "../ventas/ventas.component";
import { UsuarioComponent } from "../usuario/usuario.component";

@Component({
    selector: "mi-producto",
    imports: [
        PeliculaComponent,
        VentasComponent,
        UsuarioComponent
    ],
    templateUrl: "producto.component.html",
    styleUrl: "producto.component.css" 
})

export class ProductoComponent {

    public productos: string[] = ["Producto 1", "Producto 2", "Producto 3"];
    public agregarProducto(producto: string): void {
        this.productos.push(producto);
    }
    public eliminarProducto(producto: string): void {
        this.productos = this.productos.filter(p => p !== producto);
    }

    constructor() {
        console.log("ProductoComponent");
        alert("ProductoComponent");
    }

    ngOnInit() {
        console.log("ngOnInit");
    }
}