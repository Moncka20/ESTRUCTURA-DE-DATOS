class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.siguiente = null;
    }
}

class ListaDoblamenteEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
            this.cola = nuevoNodo;
        }
    }

    obtenerCabeza() {
        return this.cabeza;
    }

    siguiente(nodo) {
        return nodo ? nodo.siguiente : null;
    }
}

function generarOperacionAleatoria() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operadores = ['+', '-', '*', '/'];
    const operador = operadores[Math.floor(Math.random() * operadores.length)];
    let divisores = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            divisores.push(i); // Agregar el divisor a la lista
        }
    }
    if (operador === "/") {
        const divisor = divisores[Math.floor(Math.random() * divisores.length)];
        return { num1, num2: divisor, operador };
    }
    return { num1, num2, operador }; // Retornar los números y el operador
}

function evaluarOperacion(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return null;
    }
}

const lista = new ListaDoblamenteEnlazada();
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let posicionBus = 0;
const incremento = 70; // Ajusta este valor según el ancho del movimiento del bus

const operaciones = [];

function moverBus(correcta) {
    const bus = document.getElementById('bus');
    if (correcta) {
        posicionBus += incremento;
    } else {
        posicionBus -= incremento;
    }
    bus.style.left = `${posicionBus}px`;
}

function actualizarListaOperaciones() {
    const listaOperaciones = document.getElementById('listaOperaciones');
    listaOperaciones.innerHTML = '';
    operaciones.forEach(op => {
        const p = document.createElement('p');
        p.textContent = op.texto;
        p.className = op.correcta ? 'correcto' : 'incorrecto';
        listaOperaciones.appendChild(p);
    });
}

function iniciarJuego() {
    const promptUsuario = (pregunta, callback) => {
        const respuestaUsuario = prompt(pregunta);
        callback(respuestaUsuario);
    };

    const siguientePregunta = () => {
        const operacion = generarOperacionAleatoria();
        const resultado = evaluarOperacion(operacion.num1, operacion.num2, operacion.operador);

        lista.agregar(`¿Cuánto es ${operacion.num1} ${operacion.operador} ${operacion.num2}?`);
        lista.agregar(resultado);

        const pregunta = `¿Cuánto es ${operacion.num1} ${operacion.operador} ${operacion.num2}?`;
        console.log(`Pregunta: ${pregunta}`);

        promptUsuario(`Pregunta: ${pregunta}`, respuestaUsuario => {
            if (respuestaUsuario !== null) {
                const respuesta = (parseInt(respuestaUsuario)); 

                if (respuesta === (parseInt(resultado))) {
                    console.log('Respuesta correcta!');
                    respuestasCorrectas++;
                    moverBus(true);
                    operaciones.push({ texto: `${pregunta} = ${respuesta} (Correcto)`, correcta: true });
                } else {
                    console.log(`Respuesta incorrecta. La respuesta correcta era ${resultado}.`);
                    respuestasIncorrectas++;
                    moverBus(false);
                    operaciones.push({ texto: `${pregunta} = ${respuesta} (Incorrecto, correcto era ${(parseInt(resultado))})`, correcta: false });
                }
            } else {
                operaciones.push({ texto: `${pregunta} = No respondido (Incorrecto, correcto era ${(parseInt(resultado))})`, correcta: false });
                moverBus(false);
            }

            actualizarListaOperaciones();
            setTimeout(siguientePregunta, 1000); // Esperar 1 segundo antes de la siguiente pregunta
        });
    };

    siguientePregunta();
}

iniciarJuego();
