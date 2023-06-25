let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const $botonEnviar = document.querySelector("#enviar");
let numeroDeIntentos = 0;
const $valorIntentoUsuario = document.querySelector("#input-intento");
let arrayIntentos = [];
let $intentosAnteriores = document.querySelector("#intentos")
const $altoObajo = document.querySelector("#alto-o-bajo")
const $resultado = document.querySelector("#resultado")
const $botonResetear = document.querySelector("#resetear")


$botonEnviar.onclick = function () {
  numeroDeIntentos++;
  comprobarIntento();

  if (numeroDeIntentos == 10) {
    ocultarBotonEnviar();
    mostrarBotonResetear();
  }
  return false;
};

$botonResetear.onclick = function() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  numeroDeIntentos= 0;
  arrayIntentos = []
  $altoObajo.textContent = ""
  $resultado.textContent = ""
  $intentosAnteriores.textContent = ""
  ocultarBotonResetear()
  mostrarBotonEnviar()


  return false;
}

function comprobarIntento() {
  let intentoDeUsuario = Number($valorIntentoUsuario.value);

  if (intentoDeUsuario == numeroAleatorio) {
    $resultado.textContent = "Felicidades, adivinaste el numero"
    ocultarBotonEnviar();
    mostrarBotonResetear()
    return false;
  }

  if (numeroDeIntentos >= 10 ) {
    $resultado.textContent = "Se te agotaron los intentos"
    return false;
  }

  if (intentoDeUsuario < numeroAleatorio) {
    arrayIntentos.push(intentoDeUsuario);
    $intentosAnteriores.textContent = $intentosAnteriores.textContent + "   " + intentoDeUsuario
    $altoObajo.textContent = "Tu numero es demasiado pequeño"

    return false;
  }

  if (intentoDeUsuario > numeroAleatorio) {
    arrayIntentos.push(intentoDeUsuario);
    $intentosAnteriores.textContent = $intentosAnteriores.textContent + "  " + intentoDeUsuario
    $altoObajo.textContent = "Tu numero es demasiado grande"

    return false;
  }

}

function mostrarBotonEnviar() {
  $botonEnviar.className = ""

  return false;
}

function ocultarBotonEnviar() {
  $botonEnviar.className = "oculto"
  return false;
}

function mostrarBotonResetear(){
  $botonResetear.className = ""
  return false;
}

function ocultarBotonResetear() {
  $botonResetear.className = "oculto"
  return false;
}


