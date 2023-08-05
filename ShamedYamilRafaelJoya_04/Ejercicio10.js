function calcularMedia(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    const media = suma / arreglo.length;
    return media;
  }
  
  // ejemplos
  const numeros = [5, 8, 12, 3, 6, 9];
  const media = calcularMedia(numeros);
  console.log("La media es:", media);
  