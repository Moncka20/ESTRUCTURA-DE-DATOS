class Nodo{
    constructor(dato){
        this.dato=dato,
        this.stge=null
        this.ante=null
    }
}

class listaDoble{
    constructor(){
        this.inicio=null
        this.final=null
    }
    agregarnodo(dato){
        let nuevonodo = new Nodo(dato)
        if(this.inicio ==null){
            this.inicio=nuevonodo
            this.final=nuevonodo
        }else{
            this.final.stge=nuevonodo
            nuevonodo.ante=this.final
            this.final=nuevonodo
        }
    }
}
let lista =new listaDoble()
lista.agregarnodo(1)
lista.agregarnodo(2)
lista.agregarnodo(3)
lista.agregarnodo(4)
console.log(lista);
