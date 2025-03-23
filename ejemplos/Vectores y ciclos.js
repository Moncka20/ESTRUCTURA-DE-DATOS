/* let n1,n2,res
n1=prompt("ingrese la primer nota ")
n2=prompt("ingrese la segunda nota ")
res=((3-((n1*0.3)+(n2*0.3)))/0.4)
console.log("la nota que debes obtener en el tercer cohorte para aprobar la materia es= "+res)


let opc=1
let n1,n2,res
while(opc==1){
     opc=prompt("_____MENU__________\n 1) ejecutar \n 2)salir")
     n1=prompt("ingrese la primer nota ")
     n2=prompt("ingrese la segunda nota ")
     res=((3-((n1*0.3)+(n2*0.3)))/0.4)
     console.log("la nota que debes obtener en el tercer cohorte para aprobar la materia es= "+res)
}



let n1,n2,res
do{
     
     n1=prompt("ingrese la primer nota ")
     n2=prompt("ingrese la segunda nota ")
     res=((3-((n1*0.3)+(n2*0.3)))/0.4)
     console.log("la nota que debes obtener en el tercer cohorte para aprobar la materia es= "+res)
     opc=prompt("_____MENU__________\n 1) ejecutar \n 2)salir")
    }while(opc==1);

for(let i=0;i<2;i++){
   let opc=parseInt(prompt("_____MENU__________\n 1) ejecutar \n 2)salir"))

    switch(opc){
        case 1:
            n1=prompt("ingrese la primer nota ")
            n2=prompt("ingrese la segunda nota ")
            res=((3-((n1*0.3)+(n2*0.3)))/0.4)
            console.log("la nota que debes obtener en el tercer cohorte para aprobar la materia es= "+res)
           
           i--
        break;
        case 2:

          i=2
        break;
        default: alert("ingrese una opc valida")
    }
}

let cont=1
let numv=1
let acumd=0
do{
   for(let i=1;i<=numv;i++){
    if(numv % i==0){
      acumd++
    }
   }
   if(acumd==2){
    console.log(cont+ ")el numero "+ numv +" es un numero primo")
    cont++
    numv++    
   }else{
    numv++
   }
   acumd=0    
}while(cont<=100)


let n1,n2,n3 
let ejecutar
do {
  for (let i = 0; i < 1; i++) {
    n1 = prompt("ingrese el primer numero")
    n3 = prompt("ingrese el tercera numero")
    n2 = prompt("ingrese el segunda numero")
    let res = (n1>n2 && n1>n3)?"el numero mayor es el " + n1:(n2>n1 && n2>n3) ?"el numero mayor es " + n2: "el numero mayor es "+ n3

    let rest = (n1<n2 && n1<n3)?"el numero menor es el " + n1:(n2<n1 && n2<n3) ?"el numero menor es " + n2: "el numero menor es "+ n3
    console.log(res)
    console.log(rest)

    ejecutar = confirm("deseas seguir usando el programa")
  }
} while (ejecutar); 

let n1,n2,n3 
let ejecutar = true
while (ejecutar) {
  let ejecutar = confirm("deseas usar el programa")
  
  for (let i = 0; i < 1; i++) {
    n1 = parseInt(prompt("ingrese el primer numero"))
    n3 = parseInt(prompt("ingrese el tercera numero"))
    n2 = parseInt(prompt("ingrese el segunda numero"))
    let res = (n1>n2 && n1>n3)?"el numero mayor es el " + n1:(n2>n1 && n2>n3) ?"el numero mayor es " + n2: "el numero mayor es "+ n3
    let rest = (n1<n2 && n1<n3)?"el numero menor es el " + n1:(n2<n1 && n2<n3) ?"el numero menor es " + n2: "el numero menor es "+ n3
    console.log(res)
    console.log(rest)
  }
}

function primo(num, divisor = 2) {
  if (num < 1) return false;
  if (divisor * divisor > num) return true;
  if (num % divisor === 0) return false;
  return primo(num, divisor + 1);
}

function numPrimos(n, num = 1, primos = []) {
  if (primos.length >= n) return primos;
  if (primo(num)) {
    primos.push(num);
  }
  return numPrimos(n, num + 1, primos);
}

function Perfectos(num, i = 1, suma = 0) {
  if (i >= num) {
    return suma === num;
  }
  if (num % i === 0) {
    suma += i;
  }
  return Perfectos(num, i + 1, suma);
}

function promedioPrimos(primos, i = 0, suma = 0) {
  if (i >= primos.length) {
    return suma / primos.length;
  }
  suma += primos[i];
  return promedioPrimos(primos, i + 1, suma);
}

function menu(opc) {
  opc = prompt("1.Ejecutar\n2.Salir")
  if (opc == 2) {
    return;
  }
  if (opc == 1) {
    let opc1 = parseInt(prompt("1.Primos\n2.Perfectos\n3.promedio de los numeros primos"))
    let num = Number(prompt("Numero que deseas ingresar"))

    switch (opc1) {
      case 1:
        let primos = numPrimos(num);
        console.log("Los ", num ,"primeros números primos son: ", primos)
        break;

      case 2:
        if (Perfectos(num)) {
          console.log(num, " es un número perfecto");
        } else {
          console.log(num ," no es un número perfecto");
        }
        break;

      case 3:
        let primospromedio = numPrimos(num);
        let promedio = promedioPrimos(primospromedio);
        console.log("El promedio de los", num, " primeros números primos es: ",promedio);
        break;

      default:
        console.log("La opción es inválida");
    }
  }
  return menu(opc);
}
menu();

for (let i = 0; i<2; i++) {
    let res=parseInt(prompt("________MENU________\n 1)ejecutar\n 2)salir"))
    switch (res) {
        case 1:
            n1 =prompt("Ingrese nota 1")
            n2 =prompt("Ingrese nota 2")
            n3 = (3-((n1 * 0.3) + (n2 * 0.3)))/0.4
            alert(n3)
            i--
            break;
        case 2:
            i=2 
            break;
            default: alert("ingrese una opcion valida")
    }

}

cont=1 
numv =1
acumd=0
do {
  for (let i = 0; i <= numv; i++) {
        if(numv%i==0){
            acumd++
        }
        if (acumd==2) {
            cont++
            console.log("el numero "+ numv+ "es un numero primo")
        }else{
            numv++
        }

        acumd=0
    }
} while (cont<=15);

function sumar(a,b){
    return console.log(a + b)
}

console.log(sumar(10,20));

let sumas=(a,b)=>{
    return console.log(a + b)
}
console.log(sumas(10,20));

function contar(num){
    if(num < 1 ){
        return;
        } else{
            console.log(num);
            return contar(num-1)
        }
}
console.log(contar(5));

function factorial(num) {
    if (num == 1) {
        return 1
    }else{
        return num * factorial(num-1)
    }
}
console.log(factorial(5));

function fibonacci(num) {
    if (num == 0 ) {
        return 0;
    }
    else if (num == 1) {
        return 1 
    }else{
        return fibonacci(num-1) + fibonacci(num - 2)
    }
}
console.log(fibonacci(1));

return = darle el valor a la variable desde otra variable pero solo se trabaja en la dentro de la funcion 

let res = ()=>{
    let band = 100
    return band
    }
    console.log(band)= no daria nada pq return solo se trabaja dentro de la funcion
    
    consol.log(res)= 100 (pq retornamos el valor de band a res)

let res = ()=>{
    let band = 100
    let dia = 1
    let vector =[1,2,3,4,5]
    return [band,dia,vector]
    }
console.log(res());

function menu(opc,num){

    if (opc == 1) {
        if (num % 2 != 0) {
            console.log("el numero no es par");
            return num
        }else{
            console.log("el numero par");
            return num
        }
    } else if (opc == 2) {
        
        if(num % 3 != 0){
            console.log("el numero no es multiplo de 3");
            return num
        }else{
            console.log("el numero si es multiplo de 3");
            return num
        }    
    }
}

--------------------
recursividad
--------------------

 Actividad
    hacer menu con dos opciones 
    opc 1 = encontrar numero pares
    opc 2 = encontrar multiplos de 3
    opc 3 = salir

function menu(opc){
    opc = prompt("1.Ejecutar 2.Salir")
    if(opc==2){
        return;
    }
    if(opc==1){
    let opc1 = parseInt(prompt("1. pares 2.multiplos"))
    let num = Number(prompt("que numero deseas evaluar?"))

    switch (opc1) {
    case 1:
        if (num % 2 != 0) {
            alert("el numero no es par");
        }else{
            alert("el numero par");
        }
    break;
    case 2:
        if(num % 3 != 0){
            alert("el numero no es multiplo de 3");
        }else{
            alert("el numero si es multiplo de 3");
        }    
    break;
    default: ("la opcion es invalida")
}
return menu(opc)
  }
}
menu()
function primos(num){
}

--------------------
Vectores
--------------------

solo un tipo de datos por vector
se ubican por indices
indices = posiciones del vector iniciando por 0
declarar vectores 
let vector = []
push = añade datos al vector
pop = elimina datos del vector
para recorrer el vector es de forma ascendente 0->1->2->3->n
toda variable que almacene mas de 1 dato sera un objeto 
el codigo es lineal asi que si se cambia un indice en una linea posterior se cambiara el valor de ese indice 
sintaxis para generar numero aleatorio en javascript = Math.floor(Math.random()*(max - min + 1 <1 para que no empiece en 0> ) ) + min

------------------------------------
temas parcial
vectores 
recursividad
funciones
ciclos y desiciones ya tenerlos claros
---------------------------------------



function promedio(v){
    let acumu = 0
    let contadorpares = 0
    for (let i = 0; i < contadorpares; i++) {
        if (pares(v[i])==true){
            acumu+=v[i]
            contadorpares++
        }
    }
}


function pares(num){
    return num%2==0 //retorna un valor booleano si da ese resultado sera verdadero si no falso 
}

function aleatorios(){
    let num = Math.floor(Math.random()*(10-1+1))+1
    return num
}

let v=[]
let tam = parseInt(prompt("ingrese el tamaño del vector"))

    for(let i = 0 ; i<tam; i++){
    v.push(aleatorios())

    if (pares(v[i])==true) {
        console.log(`el numero ${v[i]} es par`);
        
    } else {
        console.log(`el numero ${v[i]} es impar`);
    }
}
-----------
operadores ternarios 
funcionan como un if else y su estructura es esta 
-----------
condición ? valor_si_verdadera : valor_si_falsa
-----------

v = [10,20,30,40]
v.splice(2,0,10) // (posicion donde se añade, posicion inicial , caracter que se agrega)añade digito o caracter en una posicion 
let arr = v.slice(1,3) //crea un nuevo arreglo usando una parte de otro(inicio , fin)
.join("->") // separa un vector por un caracter que colocamos y lo convierte en un string
v.concat(arr) // concatena un vector con otro 
v.includes(100) // verifica si se encuentra el caracter o valor que colocamos y nos devuelve un false si no esta y un true si esta
let res = v.filter(index=>index%2==0)// filtra segun la condicion que colocamos y se puede usar como un ciclo para validar
res.forEach(i=>console.log("el numero ${i} es par")) // recorre y hace lo que le colocamos en el vector
let r= v.find(i=>i%2==0)//devuelve el primer valor que cumpla la condicion
let r1= v.every(i=>i%2==0)//verifica si todo las posiciones cumplen la condicion
let r1= v.some(i=>i%2==0)//verifica si alguna de las posiciones cumplen la condicion
*/
