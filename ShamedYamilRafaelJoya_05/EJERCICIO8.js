class Factura {
    constructor(nombreCliente, direccionEnvio, productosComprados) {
      this.nombreCliente = nombreCliente;
      this.direccionEnvio = direccionEnvio;
      this.productosComprados = productosComprados;
      this.totalCompra = this.calcularTotalCompra();
    }
  
    calcularTotalCompra() {
      let total = 0;
      for (const producto of this.productosComprados) {
        total += producto.getPrecio() * producto.getCantidadEnStock();
      }
      return total;
    }
  
    imprimirFactura() {
      console.log("Factura");
      console.log("Nombre del cliente:", this.nombreCliente);
      console.log("Dirección de envío:", this.direccionEnvio);
      console.log("Productos comprados:");
      for (const producto of this.productosComprados) {
        console.log(
          `  - ${producto.getNombre()}, Cantidad: ${producto.getCantidadEnStock()}, Precio unitario: $${producto.getPrecio()}`
        );
      }
      console.log("Total de la compra: $", this.totalCompra);
    }
  }
  
  
  const producto1 = new Producto("Camisa", 25.99, "Camisa de manga corta", 2);
  const producto2 = new Producto("Pantalón", 39.99, "Pantalón de mezclilla", 1);
  
  const factura = new Factura("Juan Pérez", "Calle Principal, Ciudad", [producto1, producto2]);
  factura.imprimirFactura();
  