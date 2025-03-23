/* Parcial Numero 2
    generar un Vector de tamaño n que el usuario quiera y llenarlo de numeros aleatorios entre 1 y 30 y decir cual de esos numeros es un numero perfecto
    Numero perfecto = la suma de sus divisores excepto el mismo de el numero generado
*/

/*
parcial 1 
lo mismo del vector y factorial con recursividad 
*/

//------------------------------------------------------------------------
function RandomN(){
let num = Math.floor(Math.random()*(30-1+ 1))+1
return num
}
let tamvec = parseInt(prompt("Que tamaño tendra el vector"))
let vec = []
let vecFact =[]

for(i=0;i<tamvec;i++ ){
    vec.push(RandomN())
}
console.log(vec);

//------------------------------------------------------------------------

function factorial(num){
if(num == 0 || num == 1){
    return 1
}else{
    return num*factorial(num-1)
}
}
for (let i = 0; i < vec.length; i++) {
    vecFact[i]=factorial(vec[i])
    
}
console.log(vecFact);

//------------------------------------------------------------------------

function Perfectos(num) {
    let sumaDivi= 0
    for (let i = 1; i < num; i++) {
        if(num%i==0){
            sumaDivi+=i
        }
    }
    if (num==sumaDivi) {
        return true
    } else{
        return false
    }
}

for (let i = 0; i < vec.length; i++) {
    if(Perfectos(vec[i])== true){
        console.log(`el numero ${vec[i]} es un numero perfecto`);
        
    }else{
        console.log(`el numero ${vec[i]} no es un numero perfecto`);
    }
}


