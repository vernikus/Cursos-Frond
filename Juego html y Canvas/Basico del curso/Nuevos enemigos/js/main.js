const canvas = document.getElementsByTagName('canvas')[0];
const accountentLifes = document.getElementsByTagName('span')[0];
const ctx = canvas.getContext('2d');
let casillaVertical = 30;
let casillaHorizontal = 30;
let lifes = 5;
accountentLifes.innerHTML = lifes
canvas.width = 300;
canvas.height = 300;
canvas.style.border = '5px solid #000000';

let escenario = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


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
const Enemigos = function (posX, posY, ancho, alto, color, speed) {
    this.posX = posX,
        this.posY = posY,
        this.ancho = ancho,
        this.alto = alto,
        this.color = color,
        this.speed = speed,
        this.rigth = true,
        this.dibuja = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.posX, this.posY, this.ancho, this.alto, this.color, this.speed);
        },
        this.mover = function () {
            if (this.rigth == true) {
                if (this.posX < canvas.width - this.ancho) {
                    this.posX += this.speed;
                } else {
                    return this.rigth = false;
                };
            } else {
                if (this.posX > 0) {
                    this.posX -= this.speed;
                } else {
                    return this.rigth = true;
                };
            };
        }
        //Se cambio la funcion de colision a la clase para que cada instancia tenga el metodo
        this.colision = function(){
            if( personaje1.posY-personaje1.alto < this.posY &&
                personaje1.posX-personaje1.ancho < this.posX &&
                personaje1.posY > enemigo1.posY &&
                personaje1.posX+personaje1.ancho > this.posX
                ||
                personaje1.posY > this.posY-this.alto &&
                personaje1.posX > this.posX-this.ancho &&
                personaje1.posY < this.posY &&
                personaje1.posX < this.posX+this.ancho
            ){
                personaje1.posY=270
                lifes--;
                accountentLifes.innerHTML = lifes;
                if(lifes === 0){
                    console.log('Estas muerto')
                }
            }
        }
};
const personaje1 = new Personajes(135, 270, 30, 30, 'blue', 10);
const enemigo1 = new Enemigos(0, 60, 30, 30, 'red', 5);
const enemigo2 = new Enemigos(300, 120, 30, 30, 'red', 5);
const enemigo3 = new Enemigos(0, 180, 30, 30, 'red', 5);
function backGrounnd() {
    for (let indexY = 0; indexY < 10; indexY++) {
        for (let indexX = 0; indexX < 10; indexX++) {
            if (escenario[indexX][indexY] == 0) {
                ctx.fillStyle = 'coral';
                ctx.fillRect(indexX * casillaHorizontal, indexY * casillaVertical, casillaHorizontal, casillaVertical)
            }
        }
    }
}
function refresh() {
    canvas.width = 300;
    canvas.height = 300;
}
function move(){
    window.addEventListener('keydown',(event)=>{
        if(event.key === 'w'||event.key==='W'){
            if(personaje1.posY > 0){
                personaje1.posY-=personaje1.speed;
            }
        }else if(event.key === 's' || event.key === 'S'){
            if(personaje1.posY < canvas.height-personaje1.alto){
                personaje1.posY+=personaje1.speed;
            }
        }else if(event.key === 'a'|| event.key === 'A') {
            if(personaje1.posX > 0 ){
                personaje1.posX-=personaje1.speed; 
            }
        }else if(event.key === 'd'|| event.key === 'D'){
            if(personaje1.posX < canvas.width-personaje1.ancho)
            personaje1.posX+=personaje1.speed; 
        }
    });
}
function win(){
    if(personaje1.posY==0){
        console.log('Congratulations you are the cock :V')
    }
}

function principal() {
    requestAnimationFrame(principal);
    refresh()
    backGrounnd()
    personaje1.dibuja();
    enemigo1.dibuja();
    enemigo1.mover();
    enemigo1.colision()
    enemigo2.dibuja();
    enemigo2.mover();
    enemigo2.colision()
    enemigo3.dibuja();
    enemigo3.mover();
    enemigo3.colision()
    win()
}
move();
principal();