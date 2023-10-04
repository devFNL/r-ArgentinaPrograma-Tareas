// TAREA 1 CALCULAR EDAD

const anioActual = Number(prompt("Ingrese año actual"));
const anioNacimiento = Number(prompt("Ingrese el año de nacimiento"));

function calcularEdad(anioActual, anioNacimiento) {
  return anioActual - anioNacimiento;
}

console.log(`La edad es: ${calcularEdad(anioActual, anioNacimiento)} años.`);

// TAREA 2 CALCUALR SALARIO

const salarioAnual = Number(prompt("Ingrese el salario ANUAL"));
const mesesPorAnio = 12;

function calcularSalarioMensual(salarioAnual) {
  return salarioAnual / mesesPorAnio;
}

console.log(
  `Su salario mensual es de $${calcularSalarioMensual(salarioAnual)}`
);

const salarioMensual = Number(prompt("Ingrese el salario MENSUAL"));

function calcularSalarioAnual(salarioMensual) {
  return salarioMensual * mesesPorAnio;
}

console.log(`Su salario anual es de $${calcularSalarioAnual(salarioMensual)}`);
