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


// FUNCIÓN PARA CALCULAR EL PORCENTAJE
function calcularPorcentaje() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular el porcentaje.");
        }

        // Dividir el número por 100
        const porcentaje = valor / 100;

        // Mostrar el resultado en el display
        display.value = porcentaje;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}

// FUNCIÓN PARA CALCULAR LA RAÍZ CUADRADA
function calcularRaiz() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular la raíz cuadrada.");
        }

        if (valor < 0) {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
        }

        // Calcular la raíz cuadrada
        const raiz = Math.sqrt(valor);

        // Mostrar el resultado en el display
        display.value = raiz;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}

// FUNCIÓN PARA CALCULAR LA RAÍZ CÚBICA
function calcularRaizCubica() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular la raíz cúbica.");
        }

        // Calcular la raíz cúbica
        const raizCubica = Math.cbrt(valor);

        // Mostrar el resultado en el display
        display.value = raizCubica;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}

// FUNCIÓN PARA CALCULAR EL LOGARITMO BASE 10
function calcularLog() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular el logaritmo.");
        }

        if (valor <= 0) {
            throw new Error("El logaritmo de números menores o iguales a cero no está definido.");
        }

        // Calcular el logaritmo base 10
        const logaritmo = Math.log10(valor);

        // Mostrar el resultado en el display
        display.value = logaritmo;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}


// FUNCIÓN PARA CALCULAR EL SENO
function calcularSeno() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular el seno.");
        }

        // Convertir el valor a radianes
        const radianes = valor * (Math.PI / 180);

        // Calcular el seno
        const seno = Math.sin(radianes);

        // Mostrar el resultado en el display
        display.value = seno;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}

// FUNCIÓN PARA CALCULAR EL COSENO
function calcularCoseno() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular el coseno.");
        }

        // Convertir el valor a radianes
        const radianes = valor * (Math.PI / 180);

        // Calcular el coseno
        const coseno = Math.cos(radianes);

        // Mostrar el resultado en el display
        display.value = coseno;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}

// FUNCIÓN PARA CALCULAR LA TANGENTE
function calcularTangente() {
    const display = document.getElementById("display");

    try {
        const valor = parseFloat(display.value);

        if (isNaN(valor)) {
            throw new Error("Por favor ingresa un número válido para calcular la tangente.");
        }

        // Convertir el valor a radianes
        const radianes = valor * (Math.PI / 180);

        // Validar si la tangente es indefinida
        if ((valor % 180 === 90)) {
            throw new Error("La tangente es indefinida para este valor.");
        }

        // Calcular la tangente
        const tangente = Math.tan(radianes);

        // Mostrar el resultado en el display
        display.value = tangente;
    } catch (error) {
        alert(error.message);
        limpiar();
    }
}

// FUNCIÓN PARA INSERTAR π
function insertarPI() {
    const display = document.getElementById("display");
    display.value += Math.PI.toFixed(10); // Inserta π con 10 decimales
}

// FUNCIÓN PARA INSERTAR PARENTESIS DE APERTURA CON MULTIPLICACIÓN IMPLÍCITA
function insertarParentesisAbrir() {
    const display = document.getElementById("display");
    const valorActual = display.value;

    // Si el último carácter es un número o un cierre de paréntesis, agregar un "*" antes del paréntesis
    if (valorActual && /[0-9)]$/.test(valorActual)) {
        display.value += "*("; // Agrega la multiplicación implícita antes del paréntesis
    } else {
        display.value += "("; // Si no hay número antes, solo agrega el paréntesis
    }
}

// FUNCIÓN PARA INSERTAR PARENTESIS DE CIERRE
function insertarParentesisCerrar() {
    const display = document.getElementById("display");
    display.value += ")";
}

// FUNCIÓN PARA ELEVAR AL CUADRADO
function elevarAlCuadrado() {
    const display = document.getElementById("display");
    let valor = display.value;

    // Si el valor no está vacío, elevar al cuadrado
    if (valor) {
        let resultado = Math.pow(valor, 2); // Eleva al cuadrado el número
        display.value = resultado;
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

// FUNCIÓN PARA ENCENDER EL LED (On)
function encenderLed() {
    const ledEncendido = document.getElementById("ledEncendido");
    const ledApagado = document.getElementById("ledApagado");
    const botones = document.querySelectorAll(".block");

    // Encender LED de encendido (verde) y apagar el LED apagado (gris)
    ledEncendido.style.backgroundColor = "green";
    ledApagado.style.backgroundColor = "grey";  // LED apagado se vuelve gris

    // Habilitar los botones de la calculadora
    botones.forEach(boton => {
        if (boton.innerText !== "On") {
            boton.disabled = false;  // Habilitar todos los botones, excepto el botón On
        }
    });

    // Bloquear el botón On para que no pueda ser presionado
    document.querySelector("button[onclick='encenderLed()']").disabled = true;
}

// FUNCIÓN PARA APAGAR EL LED (Off)
function apagarLed() {
    const ledEncendido = document.getElementById("ledEncendido");
    const ledApagado = document.getElementById("ledApagado");
    const botones = document.querySelectorAll(".block");

    // Apagar LED de encendido (gris) y encender el LED apagado (rojo)
    ledEncendido.style.backgroundColor = "grey"; // LED de encendido se vuelve gris
    ledApagado.style.backgroundColor = "red";   // LED apagado se vuelve rojo

    // Deshabilitar los botones de la calculadora
    botones.forEach(boton => {
        if (boton.innerText !== "On") {
            boton.disabled = true;  // Deshabilitar todos los botones, excepto el botón On
        }
    });

    // Limpiar el display
    document.getElementById("display").value = '';

    // Habilitar el botón On para que pueda ser presionado nuevamente
    document.querySelector("button[onclick='encenderLed()']").disabled = false;
}

