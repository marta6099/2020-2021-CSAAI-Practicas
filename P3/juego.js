console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//-- Definir el tamaño del canvas
canvas.width = 580;
canvas.height = 520;

//Para la colision
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;


//Definir las velocidades en 0.
var dx = 0;
var dy = 0; 

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}

//DEFINIMOS TECLADO
var rightPressed = false;
var leftPressed = false;
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
        console.log("eNTRA EN ESPACIO");
        dx = 2;
        dy = 2;}
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
               if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
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
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            vidas--;
            if(!vidas){
                alert("GAME OVER");
                document.location.reload();
        }
        else{
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 3;
            dy = -3;
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
    
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}
draw();
//setInterval(draw, 10);
