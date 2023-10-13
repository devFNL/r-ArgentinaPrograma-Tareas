const $botonMiembros = document.querySelector("#botonMiembros");
const $formulario = document.querySelector("#formulario");
const $cantMiembros = document.querySelector("#cantMiembros");
const $edadMayor = document.querySelector("#edadMayor");
const $edadMenor = document.querySelector("#edadMenor");
const $edadPromedio = document.querySelector("#edadPromedio");
const $botonCalcular = document.querySelector("#botonCalcular");
const $salarioMayor = document.querySelector("#salarioMayor");
const $salarioMenor = document.querySelector("#salarioMenor");
const $salarioPromedio = document.querySelector("#salarioPromedio");
const MESES_EN_UN_ANIO = 12;

$botonMiembros.onclick = function () {
  const cantMiembros = Number($cantMiembros.value);

  for (let i = 0; i < cantMiembros; i++) {
    const $nuevaLabelEdad = document.createElement("label");
    $nuevaLabelEdad.textContent = `Ingrese edad del ${i + 1}° integrante: `;

    const $nuevoInputEdad = document.createElement("input");
    $nuevoInputEdad.type = "number";
    $nuevoInputEdad.className = "edades";

    const $nuevaLabelSalario = document.createElement("label");
    $nuevaLabelSalario.textContent = `Ingrese el salario mensual del ${
      i + 1
    }° integrante`;

    const $nuevoInputSalario = document.createElement("input");
    $nuevoInputSalario.type = "number";
    $nuevoInputSalario.className = "salarios";

    const $br = document.createElement("br");

    $formulario.appendChild($nuevaLabelEdad);
    $formulario.appendChild($nuevoInputEdad);
    $formulario.appendChild($nuevaLabelSalario);
    $formulario.appendChild($nuevoInputSalario);
  }

  return false;
};

function obtenerEdades(edades) {
  const edadesInputs = document.querySelectorAll(".edades");
  for (let i = 0; i < edadesInputs.length; i++) {
    edades.push(Number(edadesInputs[i].value));
  }
}

function obtenerSalarios(salarios) {
  const salariosInputs = document.querySelectorAll(".salarios");
  for (let i = 0; i < salariosInputs.length; i++) {
    const salarioMensual = Number(salariosInputs[i].value);
    if (salarioMensual > 0) {
      salarios.push(salarioMensual * MESES_EN_UN_ANIO);
    }
  }
}

function calcularMayor(array) {
  return Math.max(...array);
}

function calcularMenor(array) {
  return Math.min(...array);
}

function calcularPromedio(array) {
  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
}

$botonCalcular.onclick = function () {
  const edades = [];
  obtenerEdades(edades);

  const salarioMayorEdad = calcularMayor(edades);
  const salarioMenorEdad = calcularMenor(edades);
  const salarioPromedioEdad = calcularPromedio(edades);

  $edadMayor.textContent = `La edad mayor es: ${salarioMayorEdad}`;
  $edadMenor.textContent = `La edad menor es: ${salarioMenorEdad}`;
  $edadPromedio.textContent = `La edad promedio es: ${salarioPromedioEdad}`;

  const salarios = [];
  obtenerSalarios(salarios);

  const salarioMayorSalario = calcularMayor(salarios);
  const salarioMenorSalario = calcularMenor(salarios);
  const salarioPromedioSalario = calcularPromedio(salarios);

  $salarioMayor.textContent = `El salario anual mayor es: $${salarioMayorSalario}`;
  $salarioMenor.textContent = `El salario anual menor es: $${salarioMenorSalario}`;
  $salarioPromedio.textContent = `El salario anual promedio es: $${salarioPromedioSalario}`;
};
