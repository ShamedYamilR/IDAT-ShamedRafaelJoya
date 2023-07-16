function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
  }
  
  // Ejemplo de uso
  const texto = "Hola, mundo!";
  const textoInvertido = invertirCadena(texto);
  console.log("Texto invertido:", textoInvertido);
  