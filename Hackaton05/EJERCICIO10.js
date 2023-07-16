class Envio {
    constructor(direccionEnvio) {
      this.direccionEnvio = direccionEnvio;
      this.fechaEntregaEstimada = null;
      this.estadoEnvio = "Pendiente";
    }
  
    
    actualizarEstadoEnvio(estado) {
      this.estadoEnvio = estado;
    }
  
    
    calcularFechaEntregaEstimada(diasEstimados) {
      const fechaActual = new Date();
      const fechaEntrega = new Date(fechaActual);
      fechaEntrega.setDate(fechaEntrega.getDate() + diasEstimados);
      this.fechaEntregaEstimada = fechaEntrega;
    }
  }
  
 
  const direccionEnvio = "Calle Principal, Ciudad, País";
  const envio = new Envio(direccionEnvio);
  
  envio.calcularFechaEntregaEstimada(3); 
  envio.actualizarEstadoEnvio("En camino");
  
  console.log("Detalles del envío:");
  console.log("Dirección de envío:", envio.direccionEnvio);
  console.log("Fecha de entrega estimada:", envio.fechaEntregaEstimada);
  console.log("Estado de envío:", envio.estadoEnvio);
  