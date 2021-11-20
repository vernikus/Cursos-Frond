//Hay dos maneras de pasar argumentos a una funcion por valor y referencia 

let x = 10;
const suma = (a) => a = 20;
suma(x)

//Los valores primitivos como son los numeros no puden ser modificados,         Lo que esta pasando en la funcion es que se esta pasando como argumento x con el valor de 10, al ser un objeto primitivo este no puede ser modificado, por eso es que conserva su valor y no se re asigna el valor de 20 
console.log(x)
console.log(a)


const persona = {
    nombre:'jona',
    apellido:'Enriquez'
};

function cambioDePropiedades (objetoEnCuestion){
    objetoEnCuestion.nombre ='Rafa';
    objetoEnCuestion.apellido ='Ramirez'
};

cambioDePropiedades(persona);
console.log(persona);

