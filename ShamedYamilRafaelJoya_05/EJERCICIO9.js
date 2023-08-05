class Categoria {
    constructor(nombreCategoria) {
      this.nombreCategoria = nombreCategoria;
      this.productosAsociados = [];
    }
  
    
    agregarProducto(producto) {
      this.productosAsociados.push(producto);
    }
  
    
    obtenerProductosAsociados() {
      return this.productosAsociados;
    }
  }
  
  const categoriaRopa = new Categoria("Ropa");
  
  const producto1 = new Producto("Camisa", 25.99, "Camisa de manga corta", 10);
  const producto2 = new Producto("Pantalón", 39.99, "Pantalón de mezclilla", 5);
  const producto3 = new Producto("Zapatos", 49.99, "Zapatos deportivos", 8);
  
  categoriaRopa.agregarProducto(producto1);
  categoriaRopa.agregarProducto(producto2);
  categoriaRopa.agregarProducto(producto3);
  
  const productosAsociados = categoriaRopa.obtenerProductosAsociados();
  console.log("Productos asociados a la categoría:", productosAsociados);
  