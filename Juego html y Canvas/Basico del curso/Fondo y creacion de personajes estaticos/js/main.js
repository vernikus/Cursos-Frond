const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
let casillaVertical=30;
let casillaHorizontal=30;
canvas.width = 300;
canvas.height = 300;
canvas.style.border = '5px solid #000000';
//Este array es para pintar el escenario se recorre en x y y cada 0 lo pinta de un color
let escenario = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

//Se recorre el array en X & Y con un for para cada uno

for(let indexY=0; indexY<10 ;indexY++){
    for(let indexX=0; indexX <10; indexX++){
        if(escenario[indexX][indexY]==0){
            ctx.fillStyle='coral';
            ctx.fillRect(indexX*casillaHorizontal,indexY*casillaVertical,casillaHorizontal,casillaVertical)
        }
    }
}


const Personajes = function (posX, posY, ancho, alto, color, speed) {
    this.posX = posX,
    this.posY = posY,
    this.ancho = ancho,
    this.alto = alto,
    this.color = color,
    this.speed = speed,
    this.dibuja = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.ancho, this.alto, this.color, this.speed);
    }
}
const personaje1 = new Personajes(130,270,30,30,'blue',1);

const enemigo1 = new Personajes(130,0,30,30,'red',1);


//BUCLE PRINCIPAL
//El bucle principal es donde se ejecuta todo el juego
function principal() {
    requestAnimationFrame(principal);
    
    personaje1.dibuja();
    enemigo1.dibuja();
}
principal();