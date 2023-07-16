class Promocion {
    constructor(productoAsociado, descuento, fechaInicio, fechaFin) {
      this.productoAsociado = productoAsociado;
      this.descuento = descuento;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
   
    estaActiva() {
      const fechaActual = new Date();
      return fechaActual >= this.fechaInicio && fechaActual <= this.fechaFin;
    }
  
    
    aplicarDescuento() {
      if (this.estaActiva()) {
        const precioOriginal = this.productoAsociado.getPrecio();
        const descuentoAplicado = precioOriginal * (this.descuento / 100);
        const precioConDescuento = precioOriginal - descuentoAplicado;
        this.productoAsociado.setPrecio(precioConDescuento);
        console.log(
          `Descuento del ${this.descuento}% aplicado a ${this.productoAsociado.getNombre()}. Precio anterior: $${precioOriginal}, Precio con descuento: $${precioConDescuento}`
        );
      } else {
        console.log("La promoción no está activa en este momento.");
      }
    }
  }
  
  
  const producto = new Producto("Camisa", 25.99, "Camisa de manga corta", 10);
  
  const fechaInicioPromo = new Date("2023-07-16");
  const fechaFinPromo = new Date("2023-07-31");
  const descuentoPromo = 15;
  
  const promocion = new Promocion(producto, descuentoPromo, fechaInicioPromo, fechaFinPromo);
  
  console.log("Precio original:", producto.getPrecio());
  
  promocion.aplicarDescuento();
  