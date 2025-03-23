class Nodo{
    constructor(dato){
        this.dato=dato,
        this.stge=null
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
      while(aux.stge!==null){
        aux=aux.stge; 
      }
      aux.stge=nuevoNodo
     }
    }
    agregarnodoenposicion(dato, posicion) {
    const nuevoNodo = new Nodo(dato);
    if (posicion === 0) {
        nuevoNodo=this.inicio
        this.inicio=nuevoNodo
        return;
    }
    let aux = this.inicio;
    let contador = 0;
    while (aux !== null && contador < posicion - 1) {
        aux = aux.stge;
        contador++;
    }
    nuevoNodo.stge = aux.stge;
    aux.stge = nuevoNodo;
    if(aux==null){
        console.log("Error de rango");
        return        
    }
    }
    eliminarnodo(dato){
        if(this.inicio == null){
            return
        }else if(this.inicio.dato == dato){
            this.inicio = this.inicio.stge
            return
        }else{
            let aux = this.inicio
            while(aux.stge!==null){
                if(aux.stge.dato==dato){
                    aux.stge=aux=aux.stge.stge
                    return
                }
                aux=aux.stge
            }
        }
    }
    agregarnodoinicio(dato){
        if(this.inicio=null){
            return
        }else{
            this.inicio = new Nodo(dato)
            return
        }
    }
}


const lista=new ListaSimple()
lista.agregarnodo(1)
lista.agregarnodo(2)
lista.agregarnodo(3)
lista.eliminarnodo(3)
lista.agregarnodoenposicion(100,2)
console.log(lista);

