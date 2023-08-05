function encontrarPalabraMasLarga(cadena) {
    // separar la cadena en palabras
    const palabras = cadena.split(" ");
  
    // inicializar la variable para almacenar la palabra + larga
    let palabraMasLarga = "";
  
    // iterar sobre cada palabra y comparar su longitud con la longitud de la palabra + larga actual
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }
  
    return palabraMasLarga;
  }
  
  // ejemplos
  const texto = "Hola, este es un ejemplo de cadena de texto";
  const palabraMasLarga = encontrarPalabraMasLarga(texto);
  console.log("La palabra más larga es:", palabraMasLarga);
  