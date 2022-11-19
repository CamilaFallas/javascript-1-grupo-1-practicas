// VARIABLES 


// Escriba un programa que calcule el factorial de un número de manera recursiva

function factorial (num) {
  if (num < 0) 
        return 0;
  else if (num === 0) 
      return 1;
  else {
    return (num * factorial(num - 1));
  }
}

// Escriba un programa que solicite al usuario un año y le indique si es bisiesto o no.

function bisiesto (anio) {
  if ((anio %4 == 0 && anio%100 != 0) || (anio %400 == 0)) {
        console.log ('El año ' + anio + ' es bisiesto')
  } else {
    console.log ('El año ' + anio + ' no es bisiesto') 
  }
}

// Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
// 100. El programa debe continuar preguntando por nuevos números al usuario hasta
// que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
// usuario falle, si el número ingresado es mayor o menor que el número a adivinar.

function adivinar () {
  let min = 1;
  let max = 100;
  let ingreso = Number(prompt ('Ingrese un numero del ' + min + ' al ' + max + ' para divinar el numero secreto')); 
  if (ingreso === 50){
    alert (" Ha elegido el numero correcto")
  } else if (ingreso < 50) {
    alert ('El numero secreto es mas alto')
  } else if (ingreso > 50) {
    alert ('El numero secreto es mas bajo')
  } else {
    alert ('El numero secreto es mas alto')
  }    
}

function main {
  console.log(factorial (5));
  bisiesto(1900);
  adivinar();
}