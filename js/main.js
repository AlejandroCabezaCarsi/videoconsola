const botonOn = document.querySelector('.columna2Fila2');
const ledVerde = document.querySelector('.led');

botonOn.addEventListener('click', function() {
  if (ledVerde.classList.contains('ledON')) {
    ledVerde.classList.remove('ledON');
  } else {
    ledVerde.classList.add('ledON');
  }
});
  

const teleOn = document.querySelector('.columna2Fila2'); 

const videoOn = document.querySelector('.tele'); 

teleOn.addEventListener('click', function() {
    if (videoOn.classList.contains('teleOn')) { 
        videoOn.classList.remove('teleOn');
    } else {
        videoOn.classList.add('teleOn');
    }

})