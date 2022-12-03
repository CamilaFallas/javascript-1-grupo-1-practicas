/// variables 

let base = 5;
let exponente = 5;

function ejercicioUno () {
    for (let i = 0; i < 10; i++) {
        let linea = '';
        for (let j = 0; j < (10-i);  j++) {
        linea +='*';  
        }
       for ( let j =0; j<= i; j++) {
        linea += '#'; 
    }
    
    console.log (linea)
  }
}



function ejercicioDos () {
    let resultado = 1;
    for(let i = exponente; i > 0; i--){
      resultado = resultado * base;
  }
  return resultado
}
    
function ejercicioTres(base,exponente) {
    if(exponente===0){
        return 1;
    } else {
        return base * ejercicioTres(base, exponente-1);
      }
    }

function ejercicioCuatro(array) {
    if (array.length === 1) {
        return array[0];
    } else {
      return array.pop(0) + ejercicioCuatro(array);
    }
   }

   function main(){
    console.log (ejercicioUno ());
    console.log(ejercicioDos());
    console.log(ejercicioTres());
    console.log(ejercicioCuatro([1,2,3,4,5]));
  }
  
  main();