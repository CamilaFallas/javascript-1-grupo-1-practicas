//Variables 

let array1 = [1,2,3, 4];
let array2 = [1,2,3, 5];

// Ejercicio 1:
// Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que contenga una X representada por medio de ‘x’.

function equis(n) {
  for (let i = 0; i < n; i++) {
    let arr = new Array(n)
    let recorre = arr.fill(" ", 0, arr.length)
    recorre.splice(arr.length - (i + 1), 1, "x")
    recorre.splice(i, 1, "x")
    console.log(recorre.join(""))
}
}

equis(8);

// Ejercicio 2:
// Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
// arreglos contienen los mismos elementos. Si ambos arreglos contienen lo mismo
// imprima: ‘Los arreglos son iguales’ o si no, imprima los elementos diferentes entre
// los dos arreglos.

  function arrays(a, b){
    a.sort();
    b.sort();
    let repetidos = [];

    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        repetidos.push(a[i], b[i]);
      }
    }

    if (repetidos.length < 1) {
      console.log("Los arreglos son iguales");
    } else { console.log("Son diferentes: ", repetidos)}
  }
  
 
  arrays(array1, array2);

