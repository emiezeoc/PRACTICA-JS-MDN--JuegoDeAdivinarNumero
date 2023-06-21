let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const $botonEnviar = document.querySelector("#enviar");
let numeroDeIntentos = 0;
const $valorIntentoUsuario = document.querySelector("#input-intento");
const arrayIntentos = [];
const $intentosAnteriores = document.querySelector("#intentos")
const $altoObajo = document.querySelector("#alto-o-bajo")
const $resultado = document.querySelector("#resultado")



$botonEnviar.onclick = function () {
  numeroDeIntentos++;
  comprobarIntento();

  if (numeroDeIntentos == 10) {
    ocultarBotonEnviar();
    mostrarBotonResetear();
  }
  return false;
};

function comprobarIntento() {
  let intentoDeUsuario = Number($valorIntentoUsuario.value);

  if (intentoDeUsuario == numeroAleatorio) {
    $resultado.textContent = "Felicidades, adivinaste el numero"
    return false;
  }
  
  if (numeroDeIntentos > 10 ) {
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

function finalizarJuego() {
      ocultarBotonEnviar()
      mostrarBotonResetear()

  
}

function ocultarBotonEnviar() {
  return false;
}

function mostrarBotonResetear(){
  return false;
}


