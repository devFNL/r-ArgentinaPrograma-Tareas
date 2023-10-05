const $listaNumeros = document.querySelector("#listaNumeros");
const $cantNumeros = document.querySelector("#cantNumeros");
const $botonCantNumeros = document.querySelector("#botonCantNumeros");
const $promedio = document.querySelector("#promedio");
const $numeroMin = document.querySelector("#numeroMin");
const $numeroMax = document.querySelector("#numeroMax");

$botonCantNumeros.onclick = function () {
  const cantNumeros = Number($cantNumeros.value);
  const numeros = [];

  for (let i = 0; i < cantNumeros; i++) {
    const nuevoNumero = Math.round(Math.random() * 100);
    numeros.push(nuevoNumero);
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nuevoNumero;
    $listaNumeros.appendChild(nuevoLi);
  }

  // let sumaPromedio = 0;
  // for (let i = 0; i < numeros.length; i++) {
  //   sumaPromedio += numeros[i];
  // }
  // const promedio = sumaPromedio / numeros.length;
  // $promedio.textContent = `El promedio es: ${promedio}`;

  const sumaPromedio = numeros.reduce((prev, curr) => prev + curr, 0);
  const promedio = sumaPromedio / numeros.length;
  $promedio.textContent = `El promedio es: ${promedio}`;

  // let numeroMin = numeros[0];
  // let numeroMax = numeros[0];
  // for (let i = 1; i < numeros.length; i++) {
  //   if (numeros[i] < numeroMin) {
  //     numeroMin = numeros[i];
  //   }
  //   if (numeros[i] > numeroMax) {
  //     numeroMax = numeros[i];
  //   }
  // }
  // $numeroMin.textContent = `El número mínimo es: ${numeroMin}`;
  // $numeroMax.textContent = `El número máximo es: ${numeroMax}`;

  const numeroMin = Math.min(...numeros);
  $numeroMin.textContent = `El número mínimo es: ${numeroMin}`;

  const numeroMax = Math.max(...numeros);
  $numeroMax.textContent = `El número máximo es: ${numeroMax}`;
};
