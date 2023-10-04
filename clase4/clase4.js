// TAREA 1 FOR

for (let i = 3; i <= 22; i += 3) {
  console.log(i);
}

// TAREA 2 WHILE

let numero = 10;
while (numero > 0) {
  console.log(numero);
  numero--;
}

// TAREA 3 FIZZBUZZ + PROMEDIO

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// con ternario + variable (string)
// for (let i = 1; i <= 50; i++) {
//   const fizzBuzz =
//     i % 3 === 0 && i % 5 === 0
//       ? "FizzBuzz"
//       : i % 3 === 0
//       ? "Fizz"
//       : i % 5 === 0
//       ? "Buzz"
//       : i;
//   console.log(fizzBuzz);
// }

function calcularPromedio(arrayNumeros) {
  let sumaTotal = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    sumaTotal += arrayNumeros[i];
  }

  return sumaTotal / arrayNumeros.length;
}

const arrayNumeros = [10, 5, 5, 10, 50];
const promedio = calcularPromedio(arrayNumeros);
console.log(`El promedio es: ${promedio}`);
