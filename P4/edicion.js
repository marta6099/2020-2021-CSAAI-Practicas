console.log("Ejecutando JS...")

//Obtenemos los elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");

//Acesso a los deslizadores
const deslizador = document.getElementById('deslizador');
const deslizador2 = document.getElementById('deslizador2');
const deslizador3 = document.getElementById('deslizador3');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

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
    var umbralR = deslizador.value;
    var umbralG = deslizador2.value;
    var umbralB = deslizador3.value;
    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
        if (data[i] > umbralR){
          data[i] = umbralR;
        }
        if (data[i+1] > umbralG){
          data[i+1] = umbralG;
        }
        if (data[i+2] > umbralB){
          data[i+2] = umbralB;
        }
      }
  }
  function deslizadores(){
  //-- Funcion de retrollamada del deslizador
    deslizador.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value;
  
  
    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);
  
    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    //-- Obtener el array con todos los píxeles
    let data = imgData.data
  /* 
    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value
    
    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    } */
    filtroColores(data);
    ctx.putImageData(imgData, 0, 0);
  }
    deslizador2.oninput = () => {
      range_value.innerHTML = deslizador2.value;
      ctx.drawImage(img, 0,0);
      let imgData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData2.data
      filtroColores(data);
      /* umbral2 = deslizador2.value
      for (let i = 4+1; i < data.length; i+=4) {
          if (data[i] > umbral2)
            data[i] = umbral2;
      } */
      ctx.putImageData(imgData2, 0, 0);
  }
      deslizador3.oninput = () => {
          range_value.innerHTML = deslizador3.value;
          ctx.drawImage(img, 0,0);
          let imgData3 = ctx.getImageData(0, 0, canvas.width, canvas.height);
          let data = imgData3.data
          filtroColores(data);
         /*  umbral3 = deslizador3.value
          for (let i = 4+2; i < data.length; i+=4) {
              if (data[i] > umbral3)
                data[i] = umbral3;
          } */
    //-- Poner la imagen modificada en el canvas
  
    ctx.putImageData(imgData3, 0, 0);
  
  }
  }
console.log("Fin...")