const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const escenary = [
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,]
];
const heightGrid = 60;
const widthGrid = 100;
const sky = 'black'
//Se crea un array que servira para pintar los planetas 
const planetsArray =[]
class Planets{
    //El radio,inicio del angulo y final de angulo, es la formula que pide canvas para dibujar un circulo, por eso son necesario esos parametros
    constructor(posX,posY,radio,startAngle,endAngle,color,speed){
        this.posX = posX,
        this.posY = posY,
        this.radio = radio,
        this.startAngle = startAngle,
        this.endAngle = endAngle,
        this.color = color,
        this.speed = speed
    }
    paint(){
        ctx.beginPath();
        //.arc se le pasa como parametros todo lo que necesita para crear un circulo
        ctx.arc(this.posX,this.posY,this.radio,this.startAngle,this.endAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    move(){
        //Disminulle la posicion en x, para dar la nocion de que se esta moviendo
        this.posX-=this.speed;
        //Cuadno la posicion en x sea 0, la posicion volvera al punto de origen
        if(this.posX < 0){
            this.posX = 1100;
            //Se le da una posicion aleatoria para que no aparezcan en el mismo lugar
            this.posY =Math.random()*300;
        }
    }
}
//Creacion de planetas
//Se crean intancias de la clase Planets y se memten en el array planetsArray                    
planetsArray.push(new Planets
    (1100,//La posicion en x tiene que se mayor al ancho del esecenario, ya que se quiere que esten fuera
    Math.random()*300,//La posicion en y es aleatoria, para que no salgan en el mismo lugar 
    10,//El radio para que sean de diferente tamaño los planetas
    0,//El angulo de inicio siempre empieza en 0
    2*Math.PI,//El angulo final es 2xpi
    '#5c1c6180'//El color del planeta
    ,1))//Velocidad de movimiento
planetsArray.push(new Planets(100,Math.random()*300,15,0,2*Math.PI,'rgba(68,28,97,0.5)',0.75));
planetsArray.push(new Planets(1100,Math.random()*300,5,0,2*Math.PI,'rgba(32,28,97,0.25)',1.5));
planetsArray.push(new Planets(1100,Math.random()*300,10,0,2*Math.PI,'rgba(92,28,97,0.5)',1.75));
planetsArray.push(new Planets(1100,Math.random()*300,10,0,2*Math.PI,'rgba(32,98,97,0.5)',2));
planetsArray.push(new Planets(1100,Math.random()*300,15,0,2*Math.PI,'rgba(2,2,2,0.5)',2.25));
planetsArray.push(new Planets(1100,Math.random()*300,5,0,2*Math.PI,'rgba(92,28,97,0.25)',2.50));
planetsArray.push(new Planets(1100,Math.random()*300,10,0,2*Math.PI,'rgba(255,5,75,0.5)',1));
planetsArray.push(new Planets(1100,Math.random()*300,15,0,2*Math.PI,'rgba(183,0,42,0.5)',0.7));
planetsArray.push(new Planets(1100,Math.random()*300,5,0,2*Math.PI,'rgba(92,28,97,0.25)',0.70));
planetsArray.push(new Planets(1100,Math.random()*300,10,0,2*Math.PI,'rgba(22,28,97,0.5)',1.8));
planetsArray.push(new Planets(1100,Math.random()*300,15,0,2*Math.PI,'rgba(197,42,42,.5)',1.96));
planetsArray.push(new Planets(1100,Math.random()*300,5,0,2*Math.PI,'rgba(92,28,97,0.25)',1.45));
planetsArray.push(new Planets(1100,Math.random()*300,10,0,2*Math.PI,'rgba(255,5,75,0.5)',2.6));
planetsArray.push(new Planets(1100,Math.random()*300,15,0,2*Math.PI,'rgba(108,19,19,0.5)',2.45));
planetsArray.push(new Planets(1100,Math.random()*300,5,0,2*Math.PI,'rgba(92,28,97,0.25)',2.60));
planetsArray.push(new Planets(1100,Math.random()*300,10,0,2*Math.PI,'rgba(255,98,5,0.5)',2.5));
planetsArray.push(new Planets(1100,Math.random()*300,15,0,2*Math.PI,'rgba(70,15,15,0.5)',1.5));
const refresh = () =>{
    canvas.width = 1000 ;
    canvas.height = 300;
}
const printEscenary = () =>{
    for(let indexY =0; indexY <5; indexY++){
        for(let indexX =0; indexX < 10; indexX++){
            if(escenary[indexY][indexX] ==0 ){
                ctx.fillStyle=sky
                ctx.fillRect(indexX*widthGrid,indexY*heightGrid,widthGrid,heightGrid)
            }
        }
    }
}
//Creamos la funcion que pintara a los planetas
const printPlanets = () =>{
    for(let index =0 ; index < planetsArray.length; index++){
        planetsArray[index].paint()
        planetsArray[index].move()
        
    }
}
const principal = () =>{
    requestAnimationFrame(principal);
    refresh();
    printEscenary();
    //Pintamos los planetas
    printPlanets();

};
principal();
