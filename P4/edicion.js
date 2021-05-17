console.log("Ejecutando JS...")

//Obtenemos los elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");
var activo = document.getElementById('colores');
var espejo = document.getElementById("espejo");
var blancoynegro = document.getElementById("blancoynegro");
var original = document.getElementById("original");
var negativo = document.getElementById("negativo");
var contrastema = document.getElementById("contrastema");
var contrasteme = document.getElementById("contrasteme");

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

negativo.onclick = () => {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        numPixels = imageData.width * imageData.height;
 
    for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];
 
        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;
    }
 
    ctx.putImageData( imageData, 0, 0 );
};
sepia.onclick = () => {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        numPixels = imageData.width * imageData.height;
 
        for ( var i = 0; i < numPixels; i++ ) {
          var r = pixels[ i * 4 ];
          var g = pixels[ i * 4 + 1 ];
          var b = pixels[ i * 4 + 2 ];
   
          pixels[ i * 4 ] = 255 - r;
          pixels[ i * 4 + 1 ] = 255 - g;
          pixels[ i * 4 + 2 ] = 255 - b;
   
          pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
          pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
          pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
      }
 
    ctx.putImageData( imageData, 0, 0 );
};
espejo.onclick = () => {
  ctx.drawImage(img, 0, 0);
  ctx.translate(2*(img.width)/2,0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0,0);
}
original.onclick = () => {
  ctx.drawImage(img, 0,0);
  ctx.scale(1,1);
  ctx.drawImage(img,0,0);
}

//Darle más contraste
contrastema.onclick = () => {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data,
  numPixels = imageData.width * imageData.height,
  factor;
 
    var contrast = 100; // Default value
 
    factor = ( 259 * ( contrast + 255 ) ) / ( 255 * ( 259 - contrast ) );
 
    for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];
 
        pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
        pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
        pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
    }
 
    ctx.putImageData( imageData, 0, 0 );
};
contrasteme.onclick = () => {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data,
  numPixels = imageData.width * imageData.height,
  factor;
 
    var contrast = -100; // Default value
 
    factor = ( 259 * ( contrast + 255 ) ) / ( 255 * ( 259 - contrast ) );
 
    for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];
 
        pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
        pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
        pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
    }
 
    ctx.putImageData( imageData, 0, 0 );
};


console.log("Fin...")