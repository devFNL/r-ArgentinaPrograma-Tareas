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

$botonMiembros.onclick = function () {
  const cantMiembros = Number($cantMiembros.value);

  for (let i = 0; i < cantMiembros; i++) {
    const $nuevaLabelEdad = document.createElement("label");
    $nuevaLabelEdad.textContent = `Ingrese edad del ${i + 1}° integrante: `;

    const $nuevoInputEdad = document.createElement("input");
    $nuevoInputEdad.type = "number";
    $nuevoInputEdad.id = "edades";

    const $nuevaLabelSalario = document.createElement("label");
    $nuevaLabelSalario.textContent = `Ingrese el salario mensual del ${
      i + 1
    }° integrante`;

    const $nuevoInputSalario = document.createElement("input");
    $nuevoInputSalario.type = "number";
    $nuevoInputSalario.id = "salarios";

    const $br = document.createElement("br");

    $formulario.appendChild($nuevaLabelEdad);
    $formulario.appendChild($nuevoInputEdad);
    $formulario.appendChild($nuevaLabelSalario);
    $formulario.appendChild($nuevoInputSalario);
    $formulario.appendChild($br);
  }

  return false;
};

$botonCalcular.onclick = function () {
  const $edades = document.querySelectorAll("#edades");

  const edades = [];
  for (let i = 0; i < $edades.length; i++) {
    edades.push(Number($edades[i].value));
  }

  const edadMayor = Math.max(...edades);
  const edadMenor = Math.min(...edades);
  const edadPromedio =
    edades.reduce((prev, curr) => prev + curr, 0) / edades.length;

  $edadMayor.textContent = `La edad mayor es: ${edadMayor}`;
  $edadMenor.textContent = `La edad menor es: ${edadMenor}`;
  $edadPromedio.textContent = `La edad promedio es: ${edadPromedio}`;

  const $salarios = document.querySelectorAll("#salarios");

  const salarios = [];
  const MESES_EN_UN_ANIO = 12;

  for (let i = 0; i < $salarios.length; i++) {
    if ($salarios[i].value > 0) {
      salarios.push(Number($salarios[i].value) * MESES_EN_UN_ANIO);
    }
  }

  const salarioMayor = Math.max(...salarios);
  const salarioMenor = Math.min(...salarios);
  const salarioPromedio =
    salarios.reduce((prev, curr) => prev + curr, 0) / salarios.length;

  $salarioMayor.textContent = `El salario anual mayor es: $${salarioMayor}`;
  $salarioMenor.textContent = `El salario anual menor es: $${salarioMenor}`;
  $salarioPromedio.textContent = `El salario anual promedio es: $${salarioPromedio}`;
};
