console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//-- Definir el tamaño del canvas
canvas.width = 480;
canvas.height = 320;

//Definimos una bola
ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(250, 250, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()

//Definimos una raqueta
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}
//Ladrillos
var brickRowCount = 4; // cuantas filas de ladrillos
var brickColumnCount = 7; //cuantas columnas de ladrillos
var brickWidth = 55; //Ancho del ladrillo
var brickHeight = 20; //alto del ladrillos
var brickPadding = 1; //huecos entre ladrillos
var brickOffsetTop = 50; //margen superior
var brickOffsetLeft = 30; //margen inferior

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = 0;
            bricks[c][r].y = 0;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#804000";
            ctx.fill();
            ctx.closePath();
        }
    }
}
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

drawPaddle();
drawBricks();
drawScore();
drawVidas();
