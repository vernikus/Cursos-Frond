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
//Este array es para pintar el escenario se recorre en x y y cada 0 lo pinta de un color
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
        //Se declara una nueva variable que se inicializa en true para el movimiento
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
        };
};
const personaje1 = new Personajes(135, 270, 30, 30, 'blue', 6);
const enemigo1 = new Enemigos(0, 135, 30, 30, 'red', 2);
//Funcion que crea el fondo
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
//Creamos una funcion que actualice al canvas para que se vea la animacioln
function refresh() {
    canvas.width = 300;
    canvas.height = 300;
}
//Movimientos del personaje
function move(){
    window.addEventListener('keydown',(event)=>{
        //event.preventDefault()
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
//Colisiones funcion SI EL PERSONAJE CHOCA CON EL ENEMIGO SE LE RESTA UNA VIDA
function colision(){
    if(personaje1.posY-personaje1.alto < enemigo1.posY &&
        personaje1.posX-personaje1.ancho < enemigo1.posX
    ){
        //this.posY+=0
        personaje1.posY=270
        lifes--;
        accountentLifes.innerHTML = lifes;
        // console.log(personaje1.posY)
        // console.log(enemigo1.posY)
        console.log(enemigo1.posX)
        console.log(enemigo1.posY)
    }
}
function principal() {
    requestAnimationFrame(principal);
    refresh()
    //Como el fondo tambien se crea cada ves no es necesario un refres
    backGrounnd()
    personaje1.dibuja();
    //personaje1.move();
    enemigo1.dibuja();
    enemigo1.mover();
    colision()
}
move();
principal();