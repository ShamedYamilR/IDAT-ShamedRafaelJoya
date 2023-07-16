class Comentario {
    constructor(nombreCliente, fechaComentario, contenidoComentario) {
      this.nombreCliente = nombreCliente;
      this.fechaComentario = fechaComentario;
      this.contenidoComentario = contenidoComentario;
    }
  
    getNombreCliente() {
      return this.nombreCliente;
    }
  
    getFechaComentario() {
      return this.fechaComentario;
    }
  
    getContenidoComentario() {
      return this.contenidoComentario;
    }
  
    
    setNombreCliente(nombreCliente) {
      this.nombreCliente = nombreCliente;
    }
  
    setFechaComentario(fechaComentario) {
      this.fechaComentario = fechaComentario;
    }
  
    setContenidoComentario(contenidoComentario) {
      this.contenidoComentario = contenidoComentario;
    }
  }
  

  const comentario1 = new Comentario("Juan Pérez", new Date("2023-07-16"), "¡Excelente producto!");
  
  console.log("Nombre del cliente:", comentario1.getNombreCliente());
  console.log("Fecha del comentario:", comentario1.getFechaComentario());
  console.log("Contenido del comentario:", comentario1.getContenidoComentario());
  
  comentario1.setContenidoComentario("Me gustó mucho el producto, lo recomiendo.");
  
  console.log("Contenido del comentario actualizado:", comentario1.getContenidoComentario());
  