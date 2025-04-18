class Nodo {
    constructor(nombre, nota1, nota2, nota3) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.punterosgte = null;
    }

    calcularPromedio() {
        return (this.nota1 * 0.3) + (this.nota2 * 0.3) + (this.nota3 * 0.4);
    }
}

class ListaSimple {
    constructor() {
        this.inicio = null;
    }

    agregarNodo(nombre, nota1, nota2, nota3) {
        const nuevoNodo = new Nodo(nombre, nota1, nota2, nota3);
        if (this.inicio == null) {
            this.inicio = nuevoNodo;
        } else {
            let aux = this.inicio;
            while (aux.punterosgte !== null) {
                aux = aux.punterosgte;
            }
            aux.punterosgte = nuevoNodo;
        }
    }

    agregarNodoInicio(nombre, nota1, nota2, nota3) {
        const nuevoNodo = new Nodo(nombre, nota1, nota2, nota3);
        if (this.inicio == null) {
            this.inicio = nuevoNodo;
        } else {
            nuevoNodo.punterosgte = this.inicio;
            this.inicio = nuevoNodo;
        }
    }

    imprimirLista() {
        let aux = this.inicio;
        while (aux !== null) {
            console.log(`Nombre: ${aux.nombre}, 1er Corte: ${aux.nota1}, 2do Corte: ${aux.nota2}, 3er Corte: ${aux.nota3} ->`);
            aux = aux.punterosgte;
        }
    }

    agregarNodoEnPosicion(nombre, nota1, nota2, nota3, posicion) {
        const nuevoNodo = new Nodo(nombre, nota1, nota2, nota3);
        if (posicion === 0) {
            this.agregarNodoInicio(nombre, nota1, nota2, nota3);
            return;
        }
        let aux = this.inicio;
        let contador = 0;
        while (aux !== null && contador < posicion - 1) {
            aux = aux.punterosgte;
            contador++;
        }
        nuevoNodo.punterosgte = aux.punterosgte;
        aux.punterosgte = nuevoNodo;
    }

    eliminarNodo(nombre) {
        if (this.inicio.nombre === nombre) {
            this.inicio = this.inicio.punterosgte;
            return;
        }
        let aux = this.inicio;
        while (aux.punterosgte !== null) {
            if (aux.punterosgte.nombre === nombre) {
                aux.punterosgte = aux.punterosgte.punterosgte;
                return;
            }
            aux = aux.punterosgte;
        }
    }

    obtenerMejorPromedio() {
        if (this.inicio === null){
             return null;
            }
        let mejor = this.inicio;
        let aux = this.inicio.punterosgte;
        while (aux !== null) {
            if (aux.calcularPromedio() > mejor.calcularPromedio()) {
                mejor = aux;
            }
            aux = aux.punterosgte;
        }
        return mejor;
    }

    obtenerPeorPromedio() {
        if (this.inicio === null) {
            return null;
        }
        let peor = this.inicio;
        let aux = this.inicio.punterosgte;
        while (aux !== null) {
            if (aux.calcularPromedio() < peor.calcularPromedio()) {
                peor = aux;
            }
            aux = aux.punterosgte;
        }
        return peor;
    }

    calcularPromedioPonderado() {
        if (this.inicio === null) {
            return 0;
        }
        let suma = 0;
        let contador = 0;
        let aux = this.inicio;
        while (aux !== null) {
            suma += aux.calcularPromedio();
            contador++;
            aux = aux.punterosgte;
        }
        return suma / contador;
    }
}

const lista = new ListaSimple();
lista.agregarNodo("Sofia", 50, 40, 10)
lista.agregarNodo("Daniel", 25, 15, 30)
lista.agregarNodoInicio("Alexander",40,30,15)
lista.agregarNodo("Santiago", 45, 50, 25)
lista.eliminarNodo("Santiago")
lista.agregarNodoEnPosicion("Matt",10,30,40,3)
lista.eliminarNodo("Matt")
lista.imprimirLista();
const mejorEstudiante = lista.obtenerMejorPromedio();
const peorEstudiante = lista.obtenerPeorPromedio();
console.log(`Mejor promedio: ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.calcularPromedio()}`);
console.log(`Peor promedio: ${peorEstudiante.nombre} con un promedio de ${peorEstudiante.calcularPromedio()}`);
console.log(`Promedio ponderado de la lista: ${lista.calcularPromedioPonderado()}`);