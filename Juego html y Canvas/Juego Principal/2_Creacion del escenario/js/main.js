const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
//Array que se será el escenario
const escenary = [
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,]
];
const heightGrid = 60;
//El ancho de las casillas de 60 para que de un total de 300 EN EL PRODUCTO FINAL SE CAMBIARA POR 100 PARA DAR UN TOTAL SE 500
const widthGrid = 100;
// Variable que se será el color del fondo
const sky = 'black'

//Se crea la funcion que pintara el cielo
const printEscenary = () =>{
    //El indexY se recorre de arriba asia abajo (en el eje Y)
    for(let indexY =0; indexY <5; indexY++){
        //El indexX se recorre de izquierda a derecha (en el eje X)
        for(let indexX =0; indexX < 10; indexX++){
            if(escenary[indexY][indexX] ==0 ){
                //con fillStyle se pone el color de la casilla
                ctx.fillStyle=sky
                //con fillReact() se ponen las medidas de las casillas
                ctx.fillRect(indexX*widthGrid,indexY*heightGrid,widthGrid,heightGrid)
            }
        }
    }
}


const refresh = () =>{
    canvas.width = 1000 ;
    canvas.height = 300;
}
const principal = () =>{
    requestAnimationFrame(principal);
    //Se borra el canvas
    refresh()
    //Se pinta el escenario
    printEscenary()

};
principal();
