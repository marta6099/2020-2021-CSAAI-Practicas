console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var stop= document.getElementById('stop');
var derecha = document.getElementById('derecha');
var izquierda = document.getElementById('izquierda');
var inicio = document.getElementById('inicio');

//Aöadimos sonidos:
const sonido_paleta = new Audio('paddle_hit.mp3');
const sonido_ladrillos = new Audio('roto.mp3');
const sonido_perdida = new Audio('caida.mp3');
//-- Definir el tamaño del canvas
canvas.width = 580;
canvas.height = 520;

//Para la colision
const ball = {
ballRadius : 10,
x : canvas.width/2,
y : canvas.height-30,

//Definir las velocidades en 0.
dx : 0,
dy : 0, 
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}
//Aöadir boton stop z botones jugar con el movil.
var rightPressed = false;
var leftPressed = false;
stop.onclick = () => {
    ball.dx = 0;
    ball.dy = 0;
   }
derecha.onclick = () => {
  rightPressed = true;
  leftPressed = false;
   }
izquierda.onclick = () => {
    rightPressed = false;
    leftPressed = true;
     }
inicio.onclick = () => {
    ball.dx =  3 * (Math.random() * 2 - 1);
    ball.dy = -3;
}

//DEFINIMOS TECLADO

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 32){
        console.log("ENTRA EN ESPACIO");
        ball.dx =  3 * (Math.random() * 2 - 1);
        ball.dy = -3;}
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
//Detectar colisiones
function collisionDetection(){
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            // calculations
            if(b.status == 1) {
               if(ball.x > b.x && ball.x < b.x+brickWidth && ball.y > b.y && ball.y < b.y+brickHeight) {
                    ball.dy = -ball.dy;
                    b.status = 0;
                    score++;
                    sonido_ladrillos.play();
                    //Mensaje has ganado cuando se destruye todos los ladrillos
                    if(score == brickRowCount*brickColumnCount) {
                        alert("Has ganado, Enhorabuena!!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

    //Definimos una raqueta
    var paddleHeight= 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var paddle_margin = 50;

const paddle={
    x: (canvas.width-paddleWidth)/2,
    y: canvas.height - paddleHeight,
    dx:5
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddle.y, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}
//Ladrillos
var brickRowCount = 5; // cuantas filas de ladrillos
var brickColumnCount = 9; //cuantas columnas de ladrillos
var brickWidth = 55; //Ancho del ladrillo
var brickHeight = 20; //alto del ladrillos
var brickPadding = 1; //huecos entre ladrillos
var brickOffsetTop = 50; //margen superior
var brickOffsetLeft = 30; //margen inferior

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status ==1){
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#804000";
                ctx.fill();
                ctx.closePath();
            }
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
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
    drawVidas();
    collisionDetection();
    
    if(ball.x + ball.dx > canvas.width-ball.ballRadius || ball.x + ball.dx < ball.ballRadius) {
        ball.dx = -ball.dx;
    }
    if(ball.y + ball.dy < ball.ballRadius) {
        ball.dy = -ball.dy;
    }
    else if(ball.y + ball.dy > canvas.height-ball.ballRadius) {
        if(ball.x > paddleX && ball.x < paddleX + paddleWidth) {
            ball.dy = -ball.dy;
            sonido_paleta.play();
        }
        else {
            vidas--;
            if(!vidas){
                alert("GAME OVER");
                document.location.reload();
        }
        else{
            ballx = canvas.width/2;
            ball.y = canvas.height-30;
            ball.dx =  3 * (Math.random() * 2 - 1);
            ball.dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
        }
    }
}
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    ball.x += ball.dx;
    ball.y += ball.dy;
    requestAnimationFrame(draw);
}
draw();
//setInterval(draw, 10);