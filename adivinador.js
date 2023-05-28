let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const $botonEnviar = document.querySelector("#enviar");
const numeroDeIntentos = 0; 
const $valorIntentoUsuario = document.querySelector("#input-intento")


$botonEnviar.onclick = function() {
      alert('El botón funciona');
      return false; 
};

function comprobarIntento() {
      let intentoDeUsuario = Number($valorIntentoUsuario.value)
      return false;
}