
let sumaPares = 0;
let cantidadPares = 0;
let sumaImpares = 0;
let cantidadImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Ingrese el número " + i + ":"));

  if (numero % 2 === 0) {
    sumaPares += numero;
    cantidadPares++;
  } else {
    sumaImpares += numero;
    cantidadImpares++;
  }
}

let mediaPares = sumaPares / cantidadPares;
let mediaImpares = sumaImpares / cantidadImpares;

console.log("Media de los números pares: " + mediaPares);
console.log("Media de los números impares: " + mediaImpares);