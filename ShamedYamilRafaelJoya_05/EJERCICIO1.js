class Producto {
    constructor(nombre, precio, descripcion, cantidadEnStock) {
      this.nombre = nombre;
      
     
  this.precio = precio;
      
     
  this.descripcion = descripcion;
      
     
  this.cantidadEnStock = cantidadEnStock;
    }
      
   
  getNombre() {
      return this.nombre;
    }
  
    
  
  getPrecio() {
      
     
  return this.precio;
    }
 
 
  
  getDescripcion() {
      
     
  return this.descripcion;
    }
  
    getCantidadEnStock() {
      return this.cantidadEnStock;
    }
  

      
   
  setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setPrecio(precio) {
      this.precio = precio;
    }
  
    setDescripcion(descripcion) {
      this.descripcion = descripcion;
    }
  
    setCantidadEnStock(cantidad) {
      this.cantidadEnStock = cantidad;
    }
  
}

  const producto1 = new Producto("Camisa", 25.99, "Camisa de manga corta", 50);
  
  console.log("Producto:", producto1.getNombre());
  console.log("Precio:", producto1.getPrecio());
  console.log("Descripción:", producto1.getDescripcion());
  console.log("Cantidad en stock:", producto1.getCantidadEnStock());
  
  producto1.
  
  producto
  
  
  setPrecio(29.99);
  producto1.
  producto
  setCantidadEnStock(40);
  
  console.log("Producto:", producto1.getNombre());
  console.log("Precio actualizado:", producto1.getPrecio());
  console.log("Cantidad en stock actualizada:", producto1.getCantidadEnStock());