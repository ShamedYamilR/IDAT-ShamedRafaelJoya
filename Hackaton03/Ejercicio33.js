let continuar = true;

while (continuar) {
  // Solicitar los números al usuario
  let num1 = parseInt(prompt("Ingrese el primer número:"));
  let num2 = parseInt(prompt("Ingrese el segundo número:"));

  // Realizar la suma
  let suma = num1 + num2;
  console.log(`La suma de ${num1} y ${num2} es: ${suma}`);

  // Preguntar al usuario si desea continuar
  let respuesta = prompt("¿Desea continuar sumando? (s/n)");
  if (respuesta === "s" || respuesta === "S") {
    continuar = true;
  } else {
    continuar = false;
  }
}