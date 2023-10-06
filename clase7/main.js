// const $formulario = document.querySelector("#form");
// const nombre = $formulario.nombre.value;
// const pais = $formulario.pais.value;
// const conducta = $formulario.conducta.value;
// const carta = $formulario.regalos.value;

function validarNombre(nombre) {
  const MAXIMO_CARACTERES = 50;

  if (nombre.length === 0) {
    return "El nombre debe tener al menos 1 caracter";
  }
  if (nombre.length > MAXIMO_CARACTERES) {
    return "El nombre debe tener menos de 50 caracteres";
  }
  if (!/^[a-zA-Z]+$/i.test(nombre)) {
    return "El nombre sólo debe contener letras";
  }
}

function validarPais(pais) {
  const $paises = document.querySelectorAll('[name="pais"] option');

  let paisValido = false;

  for (let i = 0; i < $paises.length; i++) {
    if (pais === $paises[i].value && $paises[i].value !== "") {
      paisValido = true;
      break;
    }
  }

  if (!paisValido) {
    return "Ese país no existe en la lista";
  }
}

function validarCarta(carta) {
  if (carta.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (carta.length > 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }
  if (!/^[a-zA-Z0-9,\.-_ ]+$/i.test(carta)) {
    return "Este campo sólo puede contener letras, números, puntos, comas y guiones";
  }
}

function validarConducta() {
  const conductaRadios = document.querySelectorAll('[name="conducta"]');
  let seleccionado = false;

  for (let i = 0; i < conductaRadios.length; i++) {
    if (conductaRadios[i].checked) {
      seleccionado = true;
      break;
    }
  }

  if (!seleccionado) {
    return "Debes seleccionar tu conducta de este año";
  }

  return null;
}

function validarYEnviar(e) {
  e.preventDefault();
  const $formulario = document.querySelector("#form");
  const nombre = $formulario.nombre.value;
  const pais = $formulario.pais.value;
  const carta = $formulario.regalos.value;
  const conductaError = validarConducta();

  const errores = [];
  const nombreError = validarNombre(nombre);
  if (nombreError) {
    errores.push(nombreError);
  }
  const paisError = validarPais(pais);
  if (paisError) {
    errores.push(paisError);
  }
  const cartaError = validarCarta(carta);
  if (cartaError) {
    errores.push(cartaError);
  }
  if (conductaError) {
    errores.push(conductaError);
  }

  const $errores = document.querySelector("#errores");
  const $exito = document.querySelector("#exito");

  if (errores.length > 0) {
    $errores.innerHTML = "";
    errores.forEach((error) => {
      const li = document.createElement("li");
      li.textContent = error;
      $errores.appendChild(li);
    });
  } else {
    $exito.style.display = "block";
    $errores.innerHTML = "";
  }
}

const $botonEnviar = document.querySelector("#botonEnviar");
$botonEnviar.addEventListener("click", validarYEnviar);
