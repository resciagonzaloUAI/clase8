/* Ejercicio 04 - IF ELSE */

function Ejercicio4A() {
    let aleatorio = Math.random ();
    if (aleatorio >= 0.5) {
        alert ("El numero es " + aleatorio + " por lo tanto es: Greather than 0.5")
    } else {
        alert ("El numero es " + aleatorio + " por lo tanto es: Lower than 0.5")
    }  
}

function Ejercicio4B () {
    let age = 27;
    if (age < 18) {
        alert ("El numero es " + age + " por lo tanto es menor")
      } else if (age <65) {
        alert ("El numero es " + age + " por lo tanto es mayor")
      } else {
        alert ("El numero es " + age + " por lo tanto es jubilado")
      }
}

