/* Ejercicio 03 - Arrays */
function Ejercicio3A() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.sort();
    alert("Los meses 5 y 11 ordenados alfabeticamente son " + months[5] + " y " + months[11]);
    }

function Ejercicio3B() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.sort();
    alert("Si ordenamos los meses alfabeticamente los mismos son " + months);
    }

function Ejercicio3C() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.unshift("LPPAComienzo");
    months.push("LPPAFinal");
    alert("Se agregan un elemento al principio y final del array  " + months);
    }

function Ejercicio3D() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.shift();
    months.pop();
    alert("Los meses del año sin el Enero y Diciembre son:" + months);
    }

function Ejercicio3E() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    alert("Los meses listados de forma invertida son: " + months.reverse());
    }

function Ejercicio3F() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let guion = months.join(" - ");
    alert("Los meses del año con guiones son " + guion);
    }

    function Ejercicio3G() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mayonov = months.slice(4, 11);
    alert("Los meses del año desde mayo a noviembre son " + mayonov);
    }
