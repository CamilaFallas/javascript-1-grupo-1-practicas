//VARIABLES
array = [];

// Ejercicio 3:
// Escriba un programa que imprima todos los números del 1 al 100, uno por línea.

function ejercicio3 () {
    for (i = 1; i <= 100; i++) {
      console.log(i);
    }
}

// Ejercicio 4:
// Modifique el programa anterior para que sólo imprima los números pares.

  function ejercicio4 () {
    for (i = 1; i <= 100; i++) {
     if (i % 2 === 0) {
      console.log(i);
      }
    }
  } 

// Ejercicio 5:
// Modifique el programa del ejercicio 4 para que imprima 10 números por línea, separados por un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20, la tercera del 21 al 30 y así hasta llegar a 100.

function ejercicio5() {
  for(i = 1; i <= 100; i++) {
    
    if(i % 10 === 0) {
      array.push("<br/>");
  } else { 
      array.push(i);
    }
  }
  return(array);
}

function main () {
  ejercicio3 ();
  ejercicio4 ();
  console.log(ejercicio5 ());
}

main();