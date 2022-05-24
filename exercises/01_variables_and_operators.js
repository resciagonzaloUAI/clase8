/* Ejercicio 01 Variables y Operadores */
function Ejercicio1A() {
  let primerVar = "Buenas";
  let segundaVar = "Tardes";
  let result = primerVar.concat(" ", segundaVar);
  alert(result);
}

function Ejercicio1B() {
  let primerVar = "Buenas";
  let segundaVar = "Tardes";
  var stringLength1 = primerVar.length;
  var stringLength2 = segundaVar.length;
  var resultadolength = primerVar.length + segundaVar.length;
  alert("Buenas tardes tiene " + resultadolength + " caracteres");
}