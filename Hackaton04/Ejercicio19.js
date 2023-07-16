const numeros = [100, 25, 38, 30, 5, 6];

// Nuestra variable auxiliar para almacenar en ella
// el valor más grande del array:
let max = 0;

// Recorres el valor del array «numeros»:
for ( let numero of numeros ) {

  // Evalúa si «max» es menor que «numero» para almacenar
  // en él el número más grande hasta el momento:
  if (max < numero)
    max = numero;
}

let min = max;
for ( let numero of numeros ) {

    // Evalúa si «max» es menor que «numero» para almacenar
    // en él el número más grande hasta el momento:
    if (numero < min)
        min = numero;
  }
// Muestra en la consola el valor numérico más grande del Array:
console.log(max);
console.log(min);