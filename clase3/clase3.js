// Tarea 1 NOMBRES

const nombreUsuario = prompt("Ingrese su nombre").toLowerCase();

const miNombre = "federico";
const nombreVecina = "julieta";

if (nombreUsuario === miNombre) {
  console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`);
} else if (nombreUsuario === nombreVecina) {
  console.log(`Hola ${nombreUsuario}! se llama igual que mi vecina!`);
} else {
  console.log(`Hola ${nombreUsuario}!`);
}

//Tarea 2 MISMA EDAD?

const edadUsuario = Number(prompt("Ingrese su edad"));

const miEdad = 30;

if (edadUsuario === miEdad) {
  console.log("Su edad es la misma que la mía!");
} else if (edadUsuario > miEdad) {
  console.log("Su edad es mayor a la mía");
} else if (edadUsuario < miEdad) {
  console.log("Su edad es menor a la mía");
} else {
  console.log("La edad que ingresó no es correcta");
}

//Tarea 3 PASAR O NO

const tieneDocumento = prompt("Tiene documento?").toLowerCase();

const mayoriaDeEdad = 18;

if (tieneDocumento === "si") {
  const edadDelUsuario = Number(prompt("Ingrese su edad"));
  if (edadDelUsuario >= mayoriaDeEdad) {
    console.log("Puede pasar");
  } else if (edadDelUsuario < mayoriaDeEdad) {
    console.log("No puede pasar, usted es menor");
  } else {
    console.log("La edad ingresada no es correcta");
  }
} else if (tieneDocumento === "no") {
  console.log("No puede pasar sin documento");
} else {
  console.log("No entendí su respuesta");
}
