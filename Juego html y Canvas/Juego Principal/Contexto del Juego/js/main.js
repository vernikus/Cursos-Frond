let canvas = document.getElementsByTagName('canvas')[0];
//Creamos el contexto
let ctx = canvas.getContext('2d');

//Creamos la funcion que pinta al canvas
const refresh = () =>{
    canvas.width = 80+'%' ;
    canvas.height = 300;
}
const principal = () =>{
    requestAnimationFrame(principal);
    refresh()

};
principal();
