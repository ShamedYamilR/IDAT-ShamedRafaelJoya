class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
 
    
   
  agregarProducto(producto) {
      
     
  this.productos.push(producto);
    }

    
   
  eliminarProducto(nombreProducto) {
      
     
  this.productos = this.productos.filter(
  
       
  (producto) => producto.getNombre() !== nombreProducto
      );
  
        }
    
   
  calcularTotal() {
      
     
  let total = 0;
      
     
  for (const producto of this.productos) {
        total += producto.
        total
  
       
  getPrecio() * producto.getCantidadEnStock();
      }
       return total;
      }
      

    }

 
  
  // Ejemplo de uso
  const producto1 = new Producto("Camisa", 25.99, "Camisa de manga corta", 5);
  const producto2 = new Producto("Pantalón", 39.99, "Pantalón de mezclilla", 3);
  const producto3 = new Producto("Zapatos", 49.99, "Zapatos deportivos", 2);
  
  const carrito = new CarritoDeCompras();
  
  carrito.
  
  car
  
  
  agregarProducto(producto1);
  carrito.
  car
  agregarProducto(producto2);
  carrito.
  car
  agregarProducto(producto3);
  
  console.log("Productos en el carrito:", carrito.productos);
  
  carrito.
  
  car
  
  
  eliminarProducto("Pantalón");
  
  console.log("Productos después de eliminar un producto:", carrito.productos);
  
  const totalCompra = carrito.calcularTotal();
  console.log("Total de la compra:", totalCompra);