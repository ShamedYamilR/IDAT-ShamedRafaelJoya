const a = 5;
const b = 3;
const c = 4;

// calcular el semiperímetro
var s = (a + b + c) / 2;

// calcular el área
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`El área del triángulo es ${area}`);