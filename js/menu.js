
 
 // Asignar el evento onclick a todos los elementos con clase "letra" para que llamen a la función guardarTextoEnlace() cuando se haga clic en ellos.
 var enlacesLetra = document.getElementsByClassName("letra");
 for (var i = 0; i < enlacesLetra.length; i++) {
    enlacesLetra[i].onclick = guardarTextoEnlace;
 }
 
 var audioLetra = document.getElementById("abecedario");//Letra  
    audioLetra.src= "../static/audio/Abecedario.mp3"
    audioLetra.volume=0.6;
    boton.addEventListener("click", function() {
    if (audioLetra.paused) {

        audioLetra.play();
        boton.classList.add("active");
        boton.innerHTML = '<i class="material-icons" style="font-size:60px;color:rgb(235, 237, 238);text-shadow:2px 2px 4px #150202;">volume_up</i>';
      } else {

        audioLetra.pause();
        boton.classList.remove("active");
        boton.innerHTML = '<i class="material-icons" style="font-size:60px;color:rgb(235, 237, 238);text-shadow:2px 2px 4px #150202;">volume_off</i>';
      }
  });
// Función para guardar el texto del enlace al presionar el boton
function guardarTextoEnlace() {
    var enlace = this; // hace referencia al elemento en el que se hizo clic
    var textoEnlace = enlace.textContent; 
    localStorage.setItem('textoEnlace', textoEnlace);
 }