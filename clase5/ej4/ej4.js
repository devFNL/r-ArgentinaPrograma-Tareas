const $listaNumeros = document.querySelector("#listaNumeros");
const $cantNumeros = document.querySelector("#cantNumeros");
const $botonCantNumeros = document.querySelector("#botonCantNumeros");
const $promedio = document.querySelector("#promedio");
const $numeroMin = document.querySelector("#numeroMin");
const $numeroMax = document.querySelector("#numeroMax");

$botonCantNumeros.onclick = function () {
  const cantNumeros = Number($cantNumeros.value);
  const NUMEROS = [];

  for (let i = 0; i < cantNumeros; i++) {
    const nuevoNumero = Math.round(Math.random() * 100);
    NUMEROS.push(nuevoNumero);
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nuevoNumero;
    $listaNumeros.appendChild(nuevoLi);
  }

  let sumaPromedio = 0;
  for (let i = 0; i < NUMEROS.length; i++) {
    sumaPromedio += NUMEROS[i];
  }
  // o con .reduce tambien
  const promedio = sumaPromedio / NUMEROS.length;
  $promedio.textContent = `El promedio es: ${promedio}`;

  let numeroMin = NUMEROS[0];
  let numeroMax = NUMEROS[0];
  for (let i = 1; i < NUMEROS.length; i++) {
    if (NUMEROS[i] < numeroMin) {
      numeroMin = NUMEROS[i];
    }
    if (NUMEROS[i] > numeroMax) {
      numeroMax = NUMEROS[i];
    }
  }
  $numeroMin.textContent = `El número mínimo es: ${numeroMin}`;
  $numeroMax.textContent = `El número máximo es: ${numeroMax}`;

  //   const numeroMin = Math.min(...numeros);
  //   $numeroMin.textContent = `El número mínimo es: ${numeroMin}`;

  //   const numeroMax = Math.max(...numeros);
  //   $numeroMax.textContent = `El número máximo es: ${numeroMax}`;
};
