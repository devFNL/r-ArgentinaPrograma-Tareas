// TAREA SUMAR Y RESTAR

const operador = prompt("Ingrese '+' para sumar o '-' para restar");
const numero1 = 2;
const numero2 = 6;

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

if (operador === "+") {
  console.log(
    `El resultado de ${numero1}${operador}${numero2} es: ${sumar(
      numero1,
      numero2
    )}`
  );
} else if (operador === "-") {
  console.log(
    `El resultado de ${numero1}${operador}${numero2} es: ${restar(
      numero1,
      numero2
    )}`
  );
} else {
  console.log("Operación incorrecta. Debe ingresar '+' o '-'");
}
