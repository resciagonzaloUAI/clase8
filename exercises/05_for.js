/* Ejercicio 05 - FOR */

function Ejercicio5A() {
    const nuevoArray = ["LPPA", "JS", "HTML", "CSS", "DB"];
    for (let i=0; i<5 ; i++)
    {
        alert ("La palabra en la posicion " + i + " es " + nuevoArray[i]);
    }
}

function Ejercicio5B() {
    const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    for (const day of dias) {
        alert(day[0].toUpperCase() + day.substr(1));
      }
}


function Ejercicio5C() {
    const nuevoArray = [];
    
    for (let i=0; i<10 ; i++)
    {
        nuevoArray[i] = i;
       
    }
    let longString = nuevoArray.length;
    alert ("La longitud del nuevo array es : " + longString);
}

