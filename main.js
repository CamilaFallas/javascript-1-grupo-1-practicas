/*
VARIABLES 
*/

var arr = [0,1,2,3,4,5];
let numeros = [1,1,2,3,4,5,5,6,7];
let repetidos = [];
let ceros = [];
let longitud = 10;
let linea = " * "
let matriz = [1,0,0] [0,1,1] [0,1,0];

/* 1
Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor.*/

function highestNumber() { 
    return Math.max(...arr);
}

/* 2
Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for . */

function invertir(palindromo) {
    let espacio = "";
    for (let i = palindromo.length - 1; i >= 0; i--) {
        espacio += palindromo[i];
    }
    return espacio;
}

/* 3
Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for */

function cerosMatriz (){
    for (let i = 0; i < matriz; i++) {
        if (matriz[i + 1] === matriz[i]) {
          ceros.push(matriz[i]);
        }
      }
       
      console.log(ceros);
}

/* 4
Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for. */

function numerosRepetidos (datos){
    for (let i=0; i < arr.length; ++i) {
        let dato = datos [i];
        if (!repetidos.find(d => d == dato) && datos.slice (i + 1).find(d => d == dato)) {
                repetidos.push(dato);
        }
    }
    return repetidos;
}

/*5
Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema.
*/

function triangulo (){
    if (longitud < 5) {
        alert ('Numero debe ser mayor a 5')
    } 
    else {
        for (let i = 0; i < longitud; i++) {
            let linea = "";
             for ( let j = 0; j<= i; j++) {
                linea += " * "
            }
             console.log(linea);
         }
    }
 }
 
function main() {
    console.log ("El numero mayor del array es: " + highestNumber());
    console.log("La frase: Lavan esa base naval, si es un polidromo -> " + invertir("Lavan esa base naval"));
    console.log("Cantidad de ceros dentro de la matriz: " + cerosMatriz(matriz));
    console.log("Los numeros repetidos dentro del array son: " + numerosRepetidos(numeros));
    triangulo();
}

main();


