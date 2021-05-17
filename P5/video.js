//----- Obtener elemento de video y configurarlo
let play = document.getElementById("play");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const boton_video1 = document.getElementById("boton_video1");
const boton_video2 = document.getElementById("boton_video2");
const prueba = document.getElementById("prueba");
const on = document.getElementById("ON");
const off = document.getElementById("OFF");

//-- Establecemos las dimensiones de los vídeos
play.width=600;
play.height=400;
video1.width=350;  
video1.height=200;
video2.width=350;
video2.height=200; 

//-- Imagen de Test usada
const TEST_IMAGE_URL = "noseñal.jpg";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
play.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
on.onclick = () => {
 
  //-- Establecer la fuente de la cámara 1
  video1.src="https://youtu.be/7rxwEfFMbaY";
  video2.src="https://drive.google.com/uc?export=download&id=1IK4d1sMcp-en3W0eTYnV4rA74bAah1Sj";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video2.currentTime = 0;
  video1.play();
  video2.play();

  //-- Y en silencio...
  video1.muted =true;
  video2.muted =true;

  //-- En la emisión en directo ponemos la imagen de prueba
  play.poster = TEST_IMAGE_URL;
};

off.onclick = () => {

video1.stop = true;
video2.stop = true;

play.poster = TEST_IMAGE_URL;

video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;

video1.src = null;
video2.src = null;
play.src = null;

};


//-- Botón de Test
prueba.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
boton_video1.onclick = () => {
    play.src = video1.src;
    play.currentTime = video1.currentTime;
    play.play();
    play.poster=null;
};

boton_video2.onclick = () => {
    play.src = video2.src;
    play.currentTime = video2.currentTime;
    play.play();
    play.poster=null;
};