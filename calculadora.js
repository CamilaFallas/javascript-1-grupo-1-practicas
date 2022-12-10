function limpiar () {
  document.getElementsByClassName('form').reset();
}

function suma() {
  let x = parseInt(document.getElementById('numerouno').value);
  let y = parseInt(document.getElementById('numerodos').value);
  document.getElementById('resultado').innerHTML = x + y;
}

function resta() {
  let x = parseInt(document.getElementById('numerouno').value);
  let y = parseInt(document.getElementById('numerodos').value);
  document.getElementById('resultado').innerHTML = x - y;
}

function multiplicar() {
  let x = parseInt(document.getElementById('numerouno').value);
  let y = parseInt(document.getElementById('numerodos').value);
  document.getElementById('resultado').innerHTML = x * y;
}

function dividir() {
  let x = parseInt(document.getElementById('numerouno').value);
  let y = parseInt(document.getElementById('numerodos').value);
  if(y > 0) {
    document.getElementById('resultado').innerHTML = x / y;
  } else {
    document.getElementById('resultado').innerHTML = 'Error';
  }
}
