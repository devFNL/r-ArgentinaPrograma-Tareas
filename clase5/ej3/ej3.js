const $horasInput = document.querySelector("#horasInput");
const $minutosInput = document.querySelector("#minutosInput");
const $segundosInput = document.querySelector("#segundosInput");
const $botonSumar = document.querySelector("#botonSumar");
const $horasTotales = document.querySelector("#horasTotales");
const $minutosTotales = document.querySelector("#minutosTotales");
const $segundosTotales = document.querySelector("#segundosTotales");
const $cantVideos = document.querySelector("#cantVideos");

let cantVideos = 0;

$botonSumar.onclick = function () {
  const horas = Number($horasInput.value);
  const minutos = Number($minutosInput.value);
  const segundos = Number($segundosInput.value);

  let horasTotales = Number($horasTotales.value);
  let minutosTotales = Number($minutosTotales.value);
  let segundosTotales = Number($segundosTotales.value);

  horasTotales += horas;
  minutosTotales += minutos;
  segundosTotales += segundos;

  const UNIDAD_SEGUNDOS_MINUTOS = 60;

  while (segundosTotales >= UNIDAD_SEGUNDOS_MINUTOS) {
    segundosTotales -= UNIDAD_SEGUNDOS_MINUTOS;
    minutosTotales++;
  }

  while (minutosTotales >= UNIDAD_SEGUNDOS_MINUTOS) {
    minutosTotales -= UNIDAD_SEGUNDOS_MINUTOS;
    horasTotales++;
  }

  $horasTotales.value = horasTotales;
  $minutosTotales.value = minutosTotales;
  $segundosTotales.value = segundosTotales;

  cantVideos++;
  $cantVideos.value = cantVideos;
};
