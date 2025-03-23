class pila{
    constructor(){
        this.elementos = [];
    }

    apilar(n){
        this.elementos.push(n)
    }

    desapilar(){
        if(this.elementos.length == 0){
            console.log("La pila está vacía");
            return null
        }else{
            return this.elementos.pop();
        }
    }
    
    mostrarultimo(){
        if(this.elementos.length == 0){
            console.log("La pila está vacía");
            return null
        }else{
            return console.log(this.elementos[this.elementos.length-1])
        }
    }
}

let pilanotas = new pila()
pilanotas.apilar(10)
pilanotas.apilar(20)
pilanotas.apilar(30)
pilanotas.desapilar()
pilanotas.mostrarultimo()
console.log(pilanotas);
