class Tienda {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.productosDisponibles = [];
    }
  
  
    agregarProducto(producto) {
      this.productosDisponibles.push(producto);
    }
  
   
    buscarProductoPorNombre(nombreProducto) {
      return this.productosDisponibles.find(
        (producto) => producto.getNombre().toLowerCase() === nombreProducto.toLowerCase()
      );
    }
  
   
    mostrarProductosDisponibles() {
      console.log("Productos disponibles en la tienda:");
      this.productosDisponibles.forEach((producto) => {
        console.log(
          `Nombre: ${producto.getNombre()}, Precio: $${producto.getPrecio()}, Descripción: ${producto.getDescripcion()}, Cantidad en stock: ${producto.getCantidadEnStock()}`
        );
      });
    }
  }
  

  const tienda = new Tienda("Mi Tienda", "Calle Principal, Ciudad");
  
  const producto1 = new Producto("Camisa", 25.99, "Camisa de manga corta", 10);
  const producto2 = new Producto("Pantalón", 39.99, "Pantalón de mezclilla", 5);
  const producto3 = new Producto("Zapatos", 49.99, "Zapatos deportivos", 8);
  
  tienda.agregarProducto(producto1);
  tienda.agregarProducto(producto2);
  tienda.agregarProducto(producto3);
  
  tienda.mostrarProductosDisponibles();
  
  const nombreProductoBuscado = "pantalón";
  const productoEncontrado = tienda.buscarProductoPorNombre(nombreProductoBuscado);
  
  if (productoEncontrado) {
    console.log(`Producto encontrado: ${productoEncontrado.getNombre()}`);
  } else {
    console.log(`Producto "${nombreProductoBuscado}" no encontrado en la tienda.`);
  }
  