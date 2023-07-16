class Pedido {
  
 
    constructor(fecha, productosSeleccionados, direccionEnvio, metodoPago) {
        this.fecha = fecha;
        this.productosSeleccionados = productosSeleccionados;
        
       
    this.direccionEnvio = direccionEnvio;
        
       
    this.metodoPago = metodoPago;
        
       
    this.confirmado = false;
      }
    
     
    calcularTotal() {
        
       
    let total = 0;
        
       
    for (const producto of this.productosSeleccionados) {
          total += producto.
          total +=
    
         
    getPrecio() * producto.getCantidadEnStock();
        }
        return total;
        }
       
     
    confirmarPedido() {
        
       
    this.confirmado = true;
      }
    
          
    mostrarDetalles() {
        
       
    console.log("Fecha del pedido:", this.fecha);
        
       
    console.log("Productos seleccionados:");
        
       
    for (const producto of this.productosSeleccionados) {
          
         
    console.log(
            `  - ${producto.getNombre()}, Cantidad: ${producto.getCantidadEnStock()}, Precio unitario: $${producto.getPrecio()}`
          );
        }
        console.log("Total del pedido: $", this.calcularTotal());
        
       
    console.log("Dirección de envío:", this.direccionEnvio);
        
       
    console.log("Método de pago:", this.metodoPago);
        
       
    console.log("Pedido confirmado:", this.confirmado ? "Sí" : "No");
      }
    }
    
   
    const producto1 = new Producto("Camisa", 25.99, "Camisa de manga corta", 2);
    const producto2 = new Producto("Pantalón", 39.99, "Pantalón de mezclilla", 1);
    const producto3 = new Producto("Zapatos", 49.99, "Zapatos deportivos", 1);
    
    const fechaPedido = new Date("2023-07-16");
    const direccionEnvio = "Calle Principal, Ciudad, País";
    const metodoPago = "Tarjeta de crédito";
    
    const pedido = new Pedido(fechaPedido, [producto1, producto2, producto3], direccionEnvio, metodoPago);
    
    pedido.
    
    pedido
    
    
    mostrarDetalles();
    pedido.confirmarPedido();
    pedido.
    pedido
    mostrarDetalles();