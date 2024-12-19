// JavaScript source code

// FUNCIÓN PARA AGREGAR NÚMEROS Y OPERADORES AL DISPLAY
function agregar(valor) {
    document.getElementById("display").value += valor;
}

// FUNCIÓN PARA LIMPIAR EL DISPLAY
function limpiar() {
    document.getElementById("display").value = '';
}

// FUNCIÓN PARA BORRAR EL ÚLTIMO CARÁCTER
function borrarUltimo() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Eliminar el último carácter
}

// FUNCIÓN PARA CALCULAR EL RESULTADO
function calcular() {
    let display = document.getElementById("display").value;

    // COMPROBAR SI ES UNA DIVISIÓN
    if (display.indexOf("/") !== -1) {
        dividir(); // MANEJO ESPECÍFICO PARA DIVISIONES
    } else {
        try {
            let resultado = eval(display);
            document.getElementById("display").value = resultado;
        } catch (error) {
            alert("Error en la expresión");
        }
    }
}

// FUNCIÓN PARA MANEJAR LA DIVISIÓN
function dividir() {
    let display = document.getElementById("display").value;

    // SEPARAR LOS NÚMEROS ANTES Y DESPUÉS DEL OPERADOR "/"
    let valores = display.split("/");
    if (valores.length === 2) {
        let numero1 = Number(valores[0]);
        let numero2 = Number(valores[1]);

        if (numero2 === 0) {
            document.getElementById("display").value = ""; // LIMPIA EL DISPLAY
            alert("Error: No se puede dividir entre cero.");
        } else {
            let resultado = numero1 / numero2;

            // MUESTRA RESULTADO
            document.getElementById("display").value = resultado;
        }
    } else {
        alert("Por favor, introduce una operación válida.");
    }
}