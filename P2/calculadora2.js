function main()
{
  console.log("Cargamos pagina")
  console.log("Ejecutamos codigo")
}
const click_sound = new Audio("click.mp3");

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
  COMA: false,
}

// Cojo los elementos con getElementById. IDENTIFICADORES
display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
borrar = document.getElementById("borrar")
punto = document.getElementById("punto");
tanto = document.getElementById("tanto");
raiz = document.getElementById("raiz");

let digitos = document.getElementsByClassName("digito"); 
let operacion = document.getElementsByClassName("operacion");
let boton = document.getElementsByClassName("boton");

//--Variable del estados
let estado = ESTADO.INIT;

//-- Recorro el array de los digitos, son del 0 al 9
for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=> {
    digito(ev.target.value);
    click_sound.currentTime = 0;
    click_sound.play();
  }
}

//-- Si se introduce un digito, elimino el 0 en el display
function digito(botones) {
  //-- Según el estado hacemos una cosa u otra
  if(estado == ESTADO.INIT) {
      display.innerHTML = botones;
      estado = ESTADO.OP1;
      console.log(estado,"operador 1");
    }else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION){
      display.innerHTML += botones;
      if (estado == ESTADO.OPERATION) {
          estado = ESTADO.OP2;
          console.log(estado,"segundo operando");
          ESTADO.COMA = false;
      }
    }
  }

//-- Recorro el array de los operadores:
//-- sumar, restar, multiplicar, dividir, exponencial
for (i=0; i<operacion.length; i++){
  operacion[i].onclick = (ev)=> {
    if(estado == ESTADO.OP1){
           display.innerHTML += ev.target.value;
           estado = ESTADO.OPERATION;
           console.log(estado,"operacion deseada");
           ESTADO.COMA = true;
           click_sound.currentTime = 0;
           click_sound.play();
    }
  }
}

//-- Evaluo coma para no introducir dos seguidas
punto.onclick = (ev) => {
  if(ESTADO.COMA){
    console.log("Error al poner dos comas seguidas");
  }else{
    display.innerHTML += ev.target.value;
    ESTADO.COMA = true;
    console.log(estado,"No hay error en la coma");
    click_sound.currentTime = 0;
    click_sound.play();
  }
}

//-- Evaluar la expresion: igual
//-- Coge la cadena del display, evalua y asigna al display para mostrarlo
igual.onclick = () => {
  if(estado == ESTADO.OP1 ||  estado == ESTADO.OP2){
      display.innerHTML = eval(display.innerHTML);
      estado = ESTADO.OP1;
      ESTADO.COMA = true;
      console.log(estado,"igual");
      click_sound.currentTime = 0;
      click_sound.play();
  }
}


//-- Borra el ultimo digito u operando
borrar.onclick = (ev) => {
  display.innerHTML = display.innerHTML.slice(0,-1);
  console.log(estado,"borrar digito");
  click_sound.currentTime = 0;
  click_sound.play();
}

//-- Pone a cero la expresion
clear.onclick = (ev) => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  ESTADO.COMA = false;
  console.log(estado,"clear, se borra todo");
  click_sound.currentTime = 0;
  click_sound.play();
}