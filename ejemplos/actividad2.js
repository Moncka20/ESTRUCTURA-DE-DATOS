/*----------
ejercicio
----------
crear 3 objetos , planetas (tierra mercurio neptuno), 3 propiedades (nombre,diametro,distancia al sol) mediante una funcion decir cual es el planeta mas lejano, el mas cercano y el promedio diametros
*/
let planeta = {
  nombre: "tierra",
  diametro: 12742,
  distancia_al_sol: 149597870,
};
let planeta1 = {
  nombre: "mercurio",
  diametro: 4879,
  distancia_al_sol: 5791000,
};
let planeta2 = {
  nombre: "neptuno",
  diametro: 49528,
  distancia_al_sol: 4500000000,
};

let planetas = [];
planetas.push(planeta, planeta1, planeta2);

function diamPlanetas() {
  let diam = 0;
  for (i = 0; i < planetas.length; i++) {
    diam += planetas[i].diametro;
  }
  return diam / planetas.length;
}

function distanciamayor() {
  let mayorDistancia = Math.max(
    planeta.distancia_al_sol,
    planeta1.distancia_al_sol,
    planeta2.distancia_al_sol
  );
  let planetaalejado;
  for (i = 0; i < planetas.length; i++) {
    if (planetas[i].distancia_al_sol == mayorDistancia) {
      planetaalejado = planetas[i].nombre;
    }
  }
  console.log(`el planeta mas alejado del sol es ${planetaalejado} con ${mayorDistancia}km`)
}

function distanciamenor() {
  let menorDistancia = Math.min(
    planeta.distancia_al_sol,
    planeta1.distancia_al_sol,
    planeta2.distancia_al_sol
  );
  let planetacercano;
  for (i = 0; i < planetas.length; i++) {
    if (planetas[i].distancia_al_sol == menorDistancia) {
      planetacercano = planetas[i].nombre;
    }
  }
  console.log(`el planeta mas cercano al sol es ${planetacercano} con ${menorDistancia}km`)
}

function menu() {
  let opcion = parseInt(prompt(`¿que deseas hacer? \n 1. calcular el diametro promedio \n 2. calcular el planeta mas alejado del sol \n 3. calcular el planeta mas cercano al sol`));
  switch (opcion) {
    case 1:
        console.log("el diametro promedio es "+diamPlanetas()+"Km");
        break;
    case 2:
        console.log(distanciamayor());
        break;
    case 3:
        console.log(distanciamenor());
        break;
  }
}
console.log(menu());

