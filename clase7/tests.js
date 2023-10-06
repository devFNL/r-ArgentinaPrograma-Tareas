function testValidarNombre() {
  console.assert(
    validarNombre("Julieta") === "",
    "Validar nombre no validó un nombre válido"
  );
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "9830waj8faojfgojnha3jkikaoljsfkja3ifpja0ijf80iaw0ifjawi0fj8ianjmf0a89fuja80njof"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("----------------------") ===
      "Este campo solo debe contener letras",
    "Validar nombre no validó que el nombre solo contenga letras"
  );
}

function testValidarPais() {
  console.assert(
    validarPais("Brasil") === "",
    "Validar pais no validó una pais válida"
  );
  console.assert(
    validarPais("Mendoza") === "Ese pais no existe en la lista",
    "Validar pais no validó que el pais no exista"
  );
}

function testValidarCarta() {
  console.assert(
    validarCarta("esto es decente") === "",
    "Validar carta no validó una descripción válida"
  );
  console.assert(
    validarCarta("") === "Este campo debe tener al menos 1 caracter",
    "Validar carta no validó que la descripción no esté vacío"
  );
  console.assert(
    validarCarta(
      "sahj8f893w9af79h8wf7h89wa7h89fwa97r98wa9ru98jf8wa9f8wa3fj0w3a08fhgah089wgv9jwav0wnvhn3aw9rtj9a8hsdf8ha8faw0fg0waf9owa"
    ) === "Este campo debe tener menos de 100 caracteres",
    "validar carta no validó que la descripción sea menor a 100 caracteres"
  );
  console.assert(
    validarCarta("`(%$^'¡{~)??^~^&}[[¿¿]^^") ===
      "Este campo solo puede contener letras, numeros, puntos, comas y guiones",
    "validar carta no validó que la descripción solo contenga letras, números, punto, comas y guiones"
  );
}

function testValidarConducta() {
  console.assert(
    validarConducta("muyBueno") === "",
    "Validar conducta no validó una descripción válida"
  );
}

testValidarNombre();
testValidarPais();
testValidarCarta();
testValidarConducta();
