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
  
  function promedioPrimos(primos, i = 0, sumar = 0) {
    if (i >= primos.length) {
      return sumar / primos.length;
    }
    sumar = sumar + primos[i];
    return promedioPrimos(primos, i + 1, sumar);
  }
  
  function perfectos(num, i = 1, sumar = 0) {
    if (i >= num) {
      return sumar === num;
    }
    if (num % i === 0) {
      sumar = sumar + i;
    }
    return perfectos(num, i + 1, sumar);
  }

  function menu(opc) {
    opc = prompt("1.ejecutar\n2.salir")
    if (opc != 1) {
      return;
    }
    if (opc == 1) {
      let opc1 = parseInt(prompt("1.primos\n2.perfectos\n3.promedio de los numeros primos"))
      let num = Number(prompt("numero que deseas ingresar"))
  
      switch (opc1) {
        case 1:
          let primos = numPrimos(num);
          console.log("los ", num ,"primeros números primos son: ", primos)
          break;
  
        case 2:
          if (perfectos(num)) {
            console.log(num, " es un numero perfecto");
          } else {
            console.log(num ," no es un numero perfecto");
          }
          break;
  
        case 3:
          let primospromedio = numPrimos(num);
          let promedio = promedioPrimos(primospromedio);
          console.log("el promedio de los", num, " numeros primos es: ",promedio);
          break;
  
        default:
          console.log("la opcion es invalida");
      }
    }
    return menu(opc);
  }
  
  menu();