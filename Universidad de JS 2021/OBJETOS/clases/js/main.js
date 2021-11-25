//una clase tine nombre,atributos y metodos, las clases sirven para poder crear objetos que a su ves seran intancias de la clase

class Persona{
    //Dentro de la clase se tiene que crear un constructor que es el que le pasará los atributos a los objetos que se crearan
    constructor(name,lastName,age){
        this.name = name,
        this.lastName = lastName,
        this.age = age
    }
}


const perosnOne = new Persona('Hugo','Sanchez',19)
const personTwo = new Persona('Maria','Aguillar',23)
console.log(perosnOne)
console.log(personTwo)