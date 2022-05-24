/* Ejercicio 02 - Strings */
function Ejercicio2A() {
    let primer = "1234567890";
    let resultado = primer.substring(0, 5);
    alert(resultado);
  }

function Ejercicio2B() {
    let primer = "pruebaparaejercicio";
    alert(primer.charAt(0).toUpperCase() + primer.slice(1));
  }

function Ejercicio2C() {
    let segundo = "prue ba";
    let resultado = segundo.indexOf(" ");
    alert("La posición donde se encuentra el primer espacio blanco es: " + resultado);
 }