function ordenarArregloAscendente(arreglo) {
    for (let i = 0; i < arreglo.length - 1; i++) {
      for (let j = 0; j < arreglo.length - 1 - i; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
          // intercambiar elementos
          let temp = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temp;
        }
      }
    }
    return arreglo;
  }
  
  // ejemplo
  const numeros = [5, 8, 2, 1, 9, 3];
  const arregloOrdenado = ordenarArregloAscendente(numeros);
  console.log("Arreglo ordenado:", arregloOrdenado);
  