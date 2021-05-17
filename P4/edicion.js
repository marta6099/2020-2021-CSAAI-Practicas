console.log("Ejecutando JS...")

//Obtenemos los elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");
var activo = document.getElementById('colores');
var espejo = document.getElementById("espejo");
var blancoynegro = document.getElementById("blancoynegro");

//Acesso a los deslizadores
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor del deslizador
const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');

//Creamos la funcion de llamada a la imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {
    //Establecemos tamaño del canvas
    canvas.width = img.width;
    canvas.height = img.height;

    //Situamos la imagen en el canvas 
    ctx.drawImage(img, 0, 0);
    console.log("Imagen Cargada");
}


function filtroColores(data){
    ctx.drawImage(img, 0, 0);
    range_valueR.innerHTML = deslizadorR.value;
    range_valueG.innerHTML = deslizadorG.value;
    range_valueB.innerHTML = deslizadorB.value;
    //Obtenemos la imagen del canvas en pixeles:
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //Obtenemos el array con todos los pixeles
    var data = imgData.data

    //Obtenemos los umbrales.
    var umbralR = deslizadorR.value
    var umbralG = deslizadorG.value
    var umbralB = deslizadorB.value

    //-- Filtrar la imagen según el nuevo umbral

    for (var i = 0; i < data.length; i+=4) {
        if (data[i] > umbralR)
            data[i] = umbralR;
        
        if (data[i+1] > umbralG)
            data[i+1] = umbralG;
        
        if (data[i+2] > umbralB)
            data[i+2] = umbralB;
        
      }
      ctx.putImageData(imgData, 0, 0);
    }
  
  activo.onclick = () => {
    deslizadorR.oninput = () => {
          filtroColores();
    }
    deslizadorG.oninput = () => {
          filtroColores();
    }
    deslizadorB.oninput = () => {
          filtroColores();
    }
  }
 
blancoynegro.onclick = () => {
  var imgbyn = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imgbyn.data
  for (var i = 0; i < data.length; i++) {
    var promedio =Math.round((imgbyn.data[i*4]
      +imgbyn.data[i*4 + 1]
      +imgbyn.data[i*4 + 2])/3);
      imgbyn.data[i*4] = promedio;
      imgbyn.data[i*4 +1] = promedio;
      imgbyn.data[i*4+2] = promedio;
    }
    ctx.putImageData(imgbyn, 0, 0);
  }

function Negativo(){

}
function Sepia(){

}
espejo.onclick = () => {
  ctx.drawImage(img, 0, 0);
  ctx.translate(2*(img.width)/2,0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0,0);
  console.log("espejo");
}

console.log("Fin...")