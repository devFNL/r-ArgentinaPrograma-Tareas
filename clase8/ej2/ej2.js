const $botonMiembros = document.querySelector("#botonMiembros");
const $formulario = document.querySelector("#formulario");
const $items = document.querySelector("#items");
const $cantMiembros = document.querySelector("#cantMiembros");
const $edadMayor = document.querySelector("#edadMayor");
const $edadMenor = document.querySelector("#edadMenor");
const $edadPromedio = document.querySelector("#edadPromedio");
const $botonCalcular = document.querySelector("#botonCalcular");
const $salarioMayor = document.querySelector("#salarioMayor");
const $salarioMenor = document.querySelector("#salarioMenor");
const $salarioPromedio = document.querySelector("#salarioPromedio");
const $errores = document.querySelector("#errores");
const $calculos = document.querySelector("#calculos");
const MAXIMA_EDAD = 120;
const MAXIMO_MIEMBROS = 30;

// validaciones hechas:
// edad: no puede estar vacia, no puede ser mayor a 120, y no puede tener decimales
// salario: si esta vacio, cuenta como 0

function validarEdad(edad) {
  return !isNaN(edad) && edad >= 0 && edad < MAXIMA_EDAD;
}

function validarMiembros(cantMiembros) {
  return (
    !isNaN(cantMiembros) && cantMiembros > 0 && cantMiembros <= MAXIMO_MIEMBROS
  );
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

$botonMiembros.onclick = function () {
  borrarErrores();

  const cantMiembros = Number($cantMiembros.value);
  if (!validarMiembros(cantMiembros)) {
    agregarError(
      "Ingrese una cantidad válida de miembros. (mayor a 0 y menor que 30)"
    );
    return;
  }

  for (let i = 1; i <= cantMiembros; i++) {
    const $nuevaLabelEdad = document.createElement("label");
    $nuevaLabelEdad.textContent = `Ingrese edad del ${i}° integrante: `;

    const $nuevoInputEdad = document.createElement("input");
    $nuevoInputEdad.type = "number";
    $nuevoInputEdad.classList.add("edades");
    $nuevoInputEdad.id = `edad${i}`;

    const $nuevaLabelSalario = document.createElement("label");
    $nuevaLabelSalario.textContent = `Ingrese el salario mensual del ${i}° integrante`;

    const $nuevoInputSalario = document.createElement("input");
    $nuevoInputSalario.type = "number";
    $nuevoInputSalario.classList.add("salarios");
    $nuevoInputSalario.id = `salario${i}`;

    const $br = document.createElement("br");

    $items.appendChild($nuevaLabelEdad);
    $items.appendChild($nuevoInputEdad);
    $items.appendChild($nuevaLabelSalario);
    $items.appendChild($nuevoInputSalario);
    $items.appendChild($br);

    $botonCalcular.style.display = "block";
  }
};

$botonCalcular.onclick = function () {
  borrarErrores();

  const cantMiembros = Number($cantMiembros.value);
  if (!validarMiembros(cantMiembros)) {
    agregarError(
      "Ingrese una cantidad válida de miembros. (mayor a 0 y menor que 30)"
    );
    return;
  }
  const edades = [];

  for (let i = 1; i <= cantMiembros; i++) {
    const edadInput = document.getElementById(`edad${i}`);
    const edad = Number(edadInput.value);

    if (edadInput.value.trim() === "") {
      agregarError(`Debe ingresar la edad de todos los integrantes.`);
      return;
    }

    if (!validarEdad(edad)) {
      agregarError(
        `La edad del ${i}° integrante no es válida. (mayor a 0 y menor que 120)`
      );
      return;
    }

    if (!Number.isInteger(edad) || edad <= 0 || edad >= MAXIMA_EDAD) {
      agregarError(
        `La edad del ${i}° integrante debe ser un número entero. (sin decimales)`
      );
      return;
    }

    edades.push(edad);
  }

  const edadMayor = Math.max(...edades);
  const edadMenor = Math.min(...edades);
  const edadPromedio =
    edades.reduce((prev, curr) => prev + curr, 0) / edades.length;

  $edadMayor.textContent = `La edad mayor es: ${edadMayor}`;
  $edadMenor.textContent = `La edad menor es: ${edadMenor}`;
  $edadPromedio.textContent = `La edad promedio es: ${edadPromedio}`;

  const salarios = [];
  const MESES_EN_UN_ANIO = 12;

  for (let i = 1; i <= cantMiembros; i++) {
    const salarioInput = document.getElementById(`salario${i}`);
    let salario = Number(salarioInput.value);

    if (salarioInput.value.trim() === "") {
      salario = 0;
    }

    if (salario > 0) {
      salarios.push(salario * MESES_EN_UN_ANIO);
    }
  }

  let salarioMayor = 0;
  let salarioMenor = 0;
  let salarioPromedio = 0;

  if (salarios.length > 0) {
    salarioMayor = Math.max(...salarios);
    salarioMenor = Math.min(...salarios);
    salarioPromedio =
      salarios.reduce((prev, curr) => prev + curr, 0) / salarios.length;
  }

  $salarioMayor.textContent = `El salario anual mayor es: $${salarioMayor}`;
  $salarioMenor.textContent = `El salario anual menor es: $${salarioMenor}`;
  $salarioPromedio.textContent = `El salario anual promedio es: $${salarioPromedio}`;

  $calculos.style.display = "flex";
};
