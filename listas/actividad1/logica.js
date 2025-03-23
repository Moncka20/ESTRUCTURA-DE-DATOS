class Nodo{
    constructor(dato){
        this.dato=dato,
        this.punterosgte=null
    }
}

class ListaSimple{
    constructor(){
        this.inicio=null
    }
    agregarnodo(dato){
     const nuevoNodo=new Nodo(dato)
     if(this.inicio==null){
        this.inicio=nuevoNodo
     }else{
        let aux=this.inicio
      while(aux.punterosgte!==null){
        aux=aux.punterosgte;
        
      }
      aux.punterosgte=nuevoNodo
     }
    }

    agregarnodoinicio(dato){
        const nuevoNodo=new Nodo(dato)
     if(this.inicio==null){
        this.inicio=nuevoNodo
     }else{
         let aux=nuevoNodo
         aux.punterosgte=this.inicio
         this.inicio=nuevoNodo
     }

    }

    imprimirlista(){

        let aux=this.inicio
        while(aux!==null){
            console.log(aux.dato+" ->")
          aux=aux.punterosgte;

          
        }
    }

    agregarnodoenposicion(dato, posicion) {
    const nuevoNodo = new Nodo(dato);
    if (posicion === 0) {
        this.agregarnodoinicio(dato);
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

    eliminarNodo(dato) {
    if (this.inicio.dato === dato) {
        this.inicio = this.inicio.punterosgte;
        return;
    }
    let aux = this.inicio;
    while (aux.punterosgte !== null) {
        if (aux.punterosgte.dato === dato) {
            aux.punterosgte = aux.punterosgte.punterosgte;
            return;
        }
        aux = aux.punterosgte;
    }
}
}


const lista=new ListaSimple()
lista.agregarnodo(1)
lista.agregarnodo(2)
lista.agregarnodo(3)
lista.agregarnodoinicio(20)
lista.agregarnodoinicio(30)
lista.agregarnodoenposicion(100,2)
lista.eliminarNodo(2)
lista.imprimirlista()





