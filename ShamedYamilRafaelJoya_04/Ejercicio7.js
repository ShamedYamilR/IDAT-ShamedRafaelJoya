function capitalizarPalabras(cadena) {
    const palabras = cadena.split(" ");
    const palabrasCapitalizadas = [];
    for (let i = 0; i < palabras.length; i++) {
      palabrasCapitalizadas[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabrasCapitalizadas.join(" ");
  }
  
  // un ejemplo
  const texto = "hola buenas tardes";
  const textoCapitalizado = capitalizarPalabras(texto);
  console.log("Texto capitalizado:", textoCapitalizado);
  
  