
function calcularRestoCociente(dividendo, divisor) {

     let resto = dividendo;
    
     let cociente = 0;
    
    
    
    
     while (resto >= divisor) {
    
     resto -= divisor;
    
    cociente++;
    
    }
    
    return {
    
    resto: resto,
    
    cociente: cociente
    
    };
    
    }
    
    
    
    
    // Ejemplo de uso
    
    const dividendo = 27;
    
    const divisor = 5;
    
    
    
    
    const resultado = calcularRestoCociente(dividendo, divisor);
    
    console.log("Resto: " + resultado.resto);
    
    console.log("Cociente: " + resultado.cociente);











