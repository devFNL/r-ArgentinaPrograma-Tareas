const $nombreInput = document.querySelector("#nombreInput");
const $nombreSecundarioInput = document.querySelector("#nombreSecundarioInput");
const $apellidoInput = document.querySelector("#apellidoInput");
const $edadInput = document.querySelector("#edadInput");
const $boton = document.querySelector("#boton");
const $titulo = document.querySelector("#titulo");
const $texto = document.querySelector("#datosUsuario");

$boton.onclick = function () {
  $titulo.innerText = `Bienvenido, ${$nombreInput.value}!`;
  $texto.innerText = `Nombre: ${$nombreInput.value}
  Segundo Nombre: ${$nombreSecundarioInput.value}
  Apellido: ${$apellidoInput.value}
  Edad: ${$edadInput.value}`;
  return false;
};
