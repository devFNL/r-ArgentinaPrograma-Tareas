const $botonMiembros = document.querySelector("#botonMiembros");
const $formulario = document.querySelector("#formulario");
const $items = document.querySelector("#items");
const $cantidadMiembros = document.querySelector("#cantidadMiembros");
const $edadMayor = document.querySelector("#edadMayor");
const $edadMenor = document.querySelector("#edadMenor");
const $edadPromedio = document.querySelector("#edadPromedio");
const $botonCalcular = document.querySelector("#botonCalcular");
const $salarioMayor = document.querySelector("#salarioMayor");
const $salarioMenor = document.querySelector("#salarioMenor");
const $salarioPromedio = document.querySelector("#salarioPromedio");
const $errores = document.querySelector("#errores");
const $calculos = document.querySelector("#calculos");
const MESES_EN_UN_ANIO = 12;
const MAXIMA_EDAD = 120;
const MAXIMO_MIEMBROS = 30;

function validarEdad(edad) {
  if (isNaN(edad)) {
    agregarError("La edad debe ser un número.");
    return false;
  }
  if (edad <= 0) {
    agregarError("La edad debe ser mayor que 0.");
    return false;
  }
  if (edad >= MAXIMA_EDAD) {
    agregarError(`La edad debe ser menor que ${MAXIMA_EDAD}.`);
    return false;
  }
  if (!Number.isInteger(edad)) {
    agregarError("La edad debe ser un número entero (sin decimales).");
    return false;
  }
  return true;
}

function validarMiembros(cantidadMiembros) {
  if (
    !(
      !isNaN(cantidadMiembros) &&
      cantidadMiembros > 0 &&
      cantidadMiembros <= MAXIMO_MIEMBROS
    )
  ) {
    agregarError(
      "Ingrese una cantidad válida de miembros. (mayor a 0 y menor que 30)"
    );
    return false;
  }
  return true;
}

function agregarError(error) {
  const $errorItem = document.createElement("li");
  $errorItem.textContent = error;
  $errores.appendChild($errorItem);
}

function borrarErrores() {
  while ($errores.firstChild) {
    $errores.removeChild($errores.firstChild);
  }
}

function crearIntegrantes(i) {
  const $nuevaLabelEdad = document.createElement("label");
  $nuevaLabelEdad.textContent = `Ingrese edad del ${i}° integrante: `;

  const $nuevoInputEdad = document.createElement("input");
  $nuevoInputEdad.type = "number";
  $nuevoInputEdad.classList.add("edades");
  $nuevoInputEdad.className = `edad${i}`;

  const $nuevaLabelSalario = document.createElement("label");
  $nuevaLabelSalario.textContent = `Ingrese el salario mensual del ${i}° integrante`;

  const $nuevoInputSalario = document.createElement("input");
  $nuevoInputSalario.type = "number";
  $nuevoInputSalario.classList.add("salarios");
  $nuevoInputSalario.className = `salario${i}`;

  const $br = document.createElement("br");

  $items.appendChild($nuevaLabelEdad);
  $items.appendChild($nuevoInputEdad);
  $items.appendChild($nuevaLabelSalario);
  $items.appendChild($nuevoInputSalario);
  $items.appendChild($br);
}

function calcularMayor(array) {
  return Math.max(...array);
}

function calcularMenor(array) {
  return Math.min(...array);
}

function calcularPromedio(array) {
  const suma = array.reduce((prev, curr) => prev + curr, 0);
  return suma / array.length;
}

$botonMiembros.onclick = function () {
  borrarErrores();

  const cantidadMiembros = Number($cantidadMiembros.value);
  if (!validarMiembros(cantidadMiembros)) {
    agregarError(
      "Ingrese una cantidad válida de miembros. (mayor a 0 y menor que 30)"
    );
    return;
  }

  for (let i = 1; i <= cantidadMiembros; i++) {
    crearIntegrantes(i);
  }

  $botonCalcular.style.display = "block";
};

function obtenerEdadesYSalarios(cantidadMiembros) {
  const edades = [];
  const salarios = [];

  for (let i = 1; i <= cantidadMiembros; i++) {
    const edadInput = document.querySelector(`.edad${i}`);
    const salarioInput = document.querySelector(`.salario${i}`);

    let edad = Number(edadInput.value);
    let salario = Number(salarioInput.value);

    if (edadInput.value.trim() === "") {
      agregarError(`Debe ingresar la edad de todos los integrantes.`);
      return { edades: [], salarios: [] };
    }

    if (salarioInput.value.trim() === "") {
      salario = 0;
    }

    if (!validarEdad(edad)) {
      return { edades: [], salarios: [] };
    }

    edades.push(edad);
    salarios.push(salario * MESES_EN_UN_ANIO);
  }

  return { edades, salarios };
}

$botonCalcular.onclick = function () {
  borrarErrores();

  const cantidadMiembros = Number($cantidadMiembros.value);
  if (!validarMiembros(cantidadMiembros)) {
    return;
  }

  const { edades, salarios } = obtenerEdadesYSalarios(cantidadMiembros);

  if (edades.length === 0 || salarios.length === 0) {
    return;
  }

  const edadMayor = calcularMayor(edades);
  const edadMenor = calcularMenor(edades);
  const edadPromedio = calcularPromedio(edades);

  const salarioMayor = calcularMayor(salarios);
  const salarioMenor = calcularMenor(salarios);
  const salarioPromedio = calcularPromedio(salarios);

  $edadMayor.textContent = `La edad mayor es: ${edadMayor}`;
  $edadMenor.textContent = `La edad menor es: ${edadMenor}`;
  $edadPromedio.textContent = `La edad promedio es: ${edadPromedio}`;

  $salarioMayor.textContent = `El salario anual mayor es: $${salarioMayor}`;
  $salarioMenor.textContent = `El salario anual menor es: $${salarioMenor}`;
  $salarioPromedio.textContent = `El salario anual promedio es: $${salarioPromedio}`;

  $calculos.style.display = "flex";
};
