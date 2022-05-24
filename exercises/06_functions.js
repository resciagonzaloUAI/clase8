/* Ejercicio 06 - FUNCIONES */


function Ejercicio6A() {
    let variable1 = prompt("Ingrese el primer parametro");
    let variable2 = prompt("Ingrese el segundo parametro");
    let total = Number(variable1) + Number(variable2);
    alert("La suma es " + total);
}


function Ejercicio6B() {
  
    let variable1 = prompt("Ingrese el primer parametro");
    let variable2 = prompt("Ingrese el segundo parametro");
    var variable3 = variable1 + variable2;
    let error = 'NaN';
    if (isNaN(variable1)) {
        alert ("El parametro 1 tiene un error, el resultado es: " + error);
    }
        else if (isNaN(variable2)) {
            alert ("El parametro 2 tiene un error, el resultado es: " + error);
        }
            
        else {
            variable3 = Number(variable1) + Number(variable2);
            alert("La suma es " + variable3);
        }
    }

/* 
function Ejercicio6C() {
    let variable1 = prompt("Ingrese el primer parametro");
    let variable2 = prompt("Ingrese el segundo parametro");
    var variable3 = integer;
    let error = 'NaN';

        if (isNan (variable1) ) {
            if (isNan(variable2)) {
             if (variable1.isInteger() = true) {
                 if (variable2.isInteger = true) {
                    variable3 = variable1 + variable2;
                    alert("La suma es" + variable3);
                 } else {
                    Math.round(variable1)
                    alert ("El parametro 2 no es entero, el numero redondeado es: " + variable1 );
                 }
                } else {
                    Math.round(variable2)
                    alert ("El parametro 2 no es entero, el numero redondeado es: " + variable2 );
                }   
            } else {
                alert ("El parametro 2 tiene un error, el resultado es: " + error);
            }
        } else {
            alert ("El parametro 1 tiene un error, el resultado es: " + error);
        } 
}

*/
function Ejercicio6C() {
  
    let variable1 = prompt("Ingrese el primer parametro");
    let variable2 = prompt("Ingrese el segundo parametro");
    var variable3 = variable1 + variable2;
    let error = 'NaN';

    if (isNaN(variable1)) {
        alert ("El parametro 1 tiene un error, el resultado es: " + error);
    } 
    else if (isNaN(variable2)) {
            alert ("El parametro 2 tiene un error, el resultado es: " + error);
    }    
    else {
        if (Number.isInteger(Number(variable1))) {
            if (Number.isInteger(Number(variable2))) {
                variable3 = Number(variable1) + Number(variable2);
                alert("La suma es " + variable3);
            } else {
                    variable2 = Math.round(variable2)
                    alert ("El parametro 2 no es entero, el numero redondeado es: " + variable2 );
            }
        } 
        else {
            variable1 = Math.round(variable1)
            alert ("El parametro 1 no es entero, el numero redondeado es: " + variable1 );
        }
            
    }
    }