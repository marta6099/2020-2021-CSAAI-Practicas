console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 300;

//Score
var score = 0;
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}


//Vidas
var vidas = 3;
function drawVidas() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Vidas: "+vidas, canvas.width-65, 20);
}
drawScore();
drawVidas();


