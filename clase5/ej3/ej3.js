const $horasInput = document.querySelector("#horasInput");
const $minutosInput = document.querySelector("#minutosInput");
const $segundosInput = document.querySelector("#segundosInput");
const $botonSumar = document.querySelector("#botonSumar");
const $horasTotales = document.querySelector("#horasTotales");
const $minutosTotales = document.querySelector("#minutosTotales");
const $segundosTotales = document.querySelector("#segundosTotales");
const $cantVideos = document.querySelector("#cantVideos");

let CANTIDAD_VIDEOS = 0;

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

  while (segundosTotales >= 60) {
    segundosTotales -= 60;
    minutosTotales += 1;
  }

  while (minutosTotales >= 60) {
    minutosTotales -= 60;
    horasTotales += 1;
  }

  $horasTotales.value = horasTotales;
  $minutosTotales.value = minutosTotales;
  $segundosTotales.value = segundosTotales;

  CANTIDAD_VIDEOS++;
  $cantVideos.value = CANTIDAD_VIDEOS;
};
