const $salarioAnualInput = document.querySelector("#salarioAnual");
const $salarioMensualOutput = document.querySelector("#salarioMensual");
const $botonCalcular = document.querySelector("#botonCalcular");
const MESES_EN_UN_ANIO = 12;

$botonCalcular.onclick = function () {
  const salarioAnual = Number($salarioAnualInput.value);
  $salarioMensualOutput.value = salarioAnual / MESES_EN_UN_ANIO;
  return false;
};
