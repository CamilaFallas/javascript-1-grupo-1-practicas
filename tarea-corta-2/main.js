/*Ejercicio 1:
Escriba un programa que solicite al usuario una lista de números y que, a partir de ellos,
calcule e imprima en la consola los siguientes valores estadísticos:
- Promedio
- Mediana
- Valor mínimo
- Valor máximo
El programa debe solicitar números al usuario y almacenarlos en un array. El programa
continuará solicitando números hasta que el usuario ingrese un string vacío. Cuando esto
ocurra se calcularán e imprimirán los resultados.
Si el usuario ingresa algún valor que no sea un número, este será ignorado y no se
agregará al array. */


let array = [];
let sumando = 0;
let promedio = 0;
let mitad = 0;
let max = 0;
let min = 0;


function addnumber () {
  for (i=0; i < 5; i++){
    array[i]= prompt ("Ingrese 5 numeros que desea agregar al arreglo")
  }
  console.log(array)
}


function average () {
  for (i=0; i < array.length; i++) {
        sumando += array[i];
  }
  promedio = sumando / array.length;
  console.log ('El promedio del array es ' + promedio.toFixed(2) + ' en total.');
}


function mediana() {
  for (i = 0; i < array.length; i++){
    let mitad = (array.length / 2 )
  }
  return (array[mitad-1] + array[mitad+2])/2;
}

function valorMinimo () {
  min = array [0];
  for (i=0; i < array.length; i++) {
    if (array[i]<min) {
    min=array[i];
  }

    }
  console.log ('el numero de menor valor es ' + min );
}

function valorMaximo () {
  max = array [0];
  for (i=0; i < array.length; i++) {
    if (array[i]>max) {
    max=array[i];
  }

    }
  console.log ('El numero de mayor valor es ' + max );
}


function main () {
  addnumber();
  average();
  console.log ( 'La mediana del array es ' + mediana());
  valorMaximo ();
  valorMinimo ();
  
}

main();