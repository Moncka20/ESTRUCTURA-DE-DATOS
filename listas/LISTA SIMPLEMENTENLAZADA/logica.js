/*class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.sgte = null;
  }
}

class ListaSimplementeEnlazada {
  constructor() {
    this.inicio = null;
  }

  agregarNodo(dato) {
    const nuevoNodo = new Nodo(dato);
    if (this.inicio == null) {
      this.inicio = nuevoNodo;
    } else {
      let aux = this.inicio;
      while (aux.sgte != null) {
        aux = aux.sgte;
      }
      aux.sgte = nuevoNodo;
    }
  }

  agregarNodoenPos(pos, dato) {
    const nuevoNodo = new Nodo(dato);
    let index = 0;
    if (pos == 0) {
      nuevoNodo.sgte = this.inicio;
      this.inicio = nuevoNodo;
      return;
    } else {
      let actual = this.inicio;
      while (actual.sgte != null && index < pos - 1) {
        actual = actual.sgte;
        index++;
      }
      if (actual == null) {
        console.log("Error de rango");
        return;
      }
      nuevoNodo.sgte = actual.sgte;
      actual.sgte = nuevoNodo;
    }
  }

  eliminarNodo(dato) {
    if (this.inicio == null) {
      return;
    } else if (this.inicio.dato == dato) {
      this.inicio = this.inicio.sgte;
      return;
    } else {
      let actual = this.inicio;
      while (actual.sgte !== null) {
        if (actual.sgte.dato == dato) {
          actual.sgte = actual.sgte.sgte;
          return;
        }
        actual = actual.sgte;
      }
    }
  }
}

let lista = new ListaSimplementeEnlazada();
lista.agregarNodo(10);
lista.agregarNodo(20);
lista.agregarNodo(30);
lista.agregarNodoenPos(2, 100);
lista.eliminarNodo(100);
lista.eliminarNodo(20);
console.log(lista);*/

class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.sgte = null;
    this.anterior = null;
  }
}

class ListaDoblementeEnlazada {
  constructor() {
    this.inicio = null;
    this.final = null;
  }

  agregarNodo(dato) {
    let nuevoNodo = new Nodo(dato);
    if (this.inicio == null) {
      this.inicio = nuevoNodo;
      this.final = nuevoNodo;
    } else {
      this.final.sgte = nuevoNodo;
      nuevoNodo.anterior = this.final;
      this.final = nuevoNodo;
    }
  }

  imprimir() {
    let actual = this.inicio;
    while (this.inicio || this.final) {
      console.log(actual.dato.nombre);
      actual = actual.sgte;
    }
  }
}

let obj1 = {
  nombre: "Ana",
  edad: 19,
};

let obj2 = {
  nombre: "Carlos",
  edad: 19,
};
let obj3 = {
  nombre: "Maria",
  edad: 19,
};

let Listadoble = new ListaDoblementeEnlazada();
Listadoble.agregarNodo(obj1);
Listadoble.agregarNodo(obj2);
Listadoble.agregarNodo(obj3);
Listadoble.imprimir();
