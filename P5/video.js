//----- Obtener elemento de video y configurarlo
let play = document.getElementById("play");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const boton_video1 = document.getElementById("boton_video1");
const boton_video2 = document.getElementById("boton_video2");
const boton_video3 = document.getElementById("boton_video3");
const prueba = document.getElementById("prueba");
const on = document.getElementById("ON");
const off = document.getElementById("OFF");


const pause1 = document.getElementById("pause1");
const reproducir1 = document.getElementById("reproducir1");
const pause2 = document.getElementById("pause2");
const reproducir2 = document.getElementById("reproducir2");
const pause3 = document.getElementById("pause3");
const reproducir3 = document.getElementById("reproducir3");


//-- Establecemos las dimensiones de los vídeos
play.width=600;
play.height=600;
video1.width=450;  
video1.height=300;
video2.width=400;
video2.height=400;
video3.width = 400;
video3.height = 400; 

//-- Imagen de Test usada
const TEST_IMAGE_URL = "noseñal.jpg";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
play.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
on.onclick = () => {
 
  //-- Establecer la fuente de la cámara 1
  video1.src="https://marta6099.github.io/prueba/Video_uno.mp4";
  video2.src="https://marta6099.github.io/prueba/video2.mp4";
  video3.src ="https://marta6099.github.io/prueba/video3.mp4";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video2.currentTime = 0;
  video3.currentTime = 0;
  video1.play();
  video3.play();
  video2.play();

  //-- Videos en silencio mientras no se reproducen
  video1.muted =true;
  video2.muted =true;
  video3.muted = true;

  //-- Si no hemos seleccionado ningun video se pondra la imagen de prueba
  play.poster = TEST_IMAGE_URL;
};

off.onclick = () => {

video1.stop = true;
video2.stop = true;
video3.stop = true;

play.poster = TEST_IMAGE_URL;

video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

video1.src = null;
video2.src = null;
video3.src = null;
play.src = null;

};

//-- Botón de Test
prueba.onclick = () => {
    play.poster = TEST_IMAGE_URL;
    play.src = null;
};

//-- Botón de Selección de la cámara 1
boton_video1.onclick = () => {
    play.src = video1.src;
    play.currentTime = video1.currentTime;
    play.play();
    video1.play();
    play.poster=null;
};

boton_video2.onclick = () => {
    play.src = video2.src;
    play.currentTime = video2.currentTime;
    play.play();
    video2.play();
    play.poster=null;
};

boton_video3.onclick = () => {
    play.src = video3.src;
    play.currentTime = video3.currentTime;
    play.play();
    video3.play();
    play.poster=null;
};
pause1.onclick = () => {
    video1.pause();
}
reproducir1.onclick = () => {
    video1.play();
}

pause2.onclick = () => {
    video2.pause();
}
reproducir2.onclick = () => {
    video2.play();
}

pause3.onclick = () => {
    video3.pause();
}
reproducir3.onclick = () => {
    video3.play();
}
//Para tener los videos en bucle o no
var bucle = document.getElementById("bucle");
bucle.onclick = () => {
  console.log("bucle");
    video4.loop=true;
};
var nobucle = document.getElementById("nobucle");
nobucle.onclick = () => {
  console.log("No bucle");
    video4.muted=false;
};