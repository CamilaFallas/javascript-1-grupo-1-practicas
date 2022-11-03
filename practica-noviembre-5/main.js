// Variables Globales
numero = Number(prompt('Ingrese un numero'));
palabra = prompt('Ingrese una palabra');
frase = prompt('Ingrese una frase');


// Escriba un programa que solicite un número al usuario e indique si es:
// Par o impar 
// Divisible entre 3 
// Divisible entre 5

function ejercicioUno(numero) {
  if (numero % 2 === 0 ){
    console.log ( 'Numero ' + numero + ' es par');
  }
  if (numero % 2 === 1 ){
  console.log ('Numero ' + numero + ' es impar');
  }
  if (numero % 3 === 0 ){
    console.log ('Numero ' + numero + ' es divisible entre 3');
  }  if (numero % 5 === 0 ){
    console.log ('Numero ' + numero + ' es divisible entre 5');
  }
}

//Escriba un programa que solicite al usuario un número e imprima la suma de todos 
//los números desde 1 hasta ese número.

function ejercicioDos(numero) {
  let suma = 0;
  for (i=1;i < numero; i++) {
      suma = numero + i;
  }
  return suma;
}

// Escribe un programa que reciba un string y retorne el mismo string invertido. Utilice
// un while para resolver este ejercicio. hola → aloh

function ejercicioTres (palabra) {
  let espacio = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    espacio += palabra[i];
  }
  return espacio;
}

//Escriba un programa que reciba una frase y este debe de intercambiar las vocales
//por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”.

  function ejercicioCuatro (frase) {
    let espacio = "";
    for (let frase = 0; frase[i] < frase[i].length; i++) {
      if (frase [i] === 'a' || frase[i] === 'e'||frase[i] === 'i'||frase [i] === 'o'||frase [i] === 'u')
      espacio += palabra.replace('i');
    }
    return espacio;
  }


//Escriba un programa que reciba una palabra y reordene sus letras en orden
//alfabético. Ej. hola → ahlo

function EjercicioCinco(){
  var letras = palabra.split(''); // separar letras por letra
  var tmp;
  for(var i = 0; i < letras.length; i++){ //palabra
    for(var j = i + 1; j < letras.length; j++){ // letra por letra
      if(letras[i] > letras[j]){
        tmp = letras[i];
        letras[i] = letras[j];
        letras[j] = tmp;
      }
    }
  }
  return letras;
}
console.log(EjercicioCinco());

function main () {
  ejercicioUno(numero);
  console.log (ejercicioDos(numero));
  console.log (ejercicioTres (palabra))
  console.log (ejercicioCuatro());
  console.log(EjercicioCinco());
}
main ();