class Animal{
    //Los atributos estaticos no son más que variables, se declaran con la palabra reservada static en lugar de Let, var o const
    static contador= 0; 
    
    //Los atributos no estaticos estan asociados a los objetos y no a las clases
    size = 'small is the default'
    constructor(type,feeding,predator,sound){
        this.type = type,
        this.feeding = feeding,
        this.predator = predator,
        this.sound = sound
        Animal.contador++;
    }
    soundd(){
        return this.sound
    };
    static description(){
        console.log(`This animal is of type ${this.type} ist diet is ${this.feeding}`);
    };
    static predator(animal){
        console.log(`My natural predators are ${animal.predator}`)
    }
};

//Para acceder a la variable statica se hace desde la clase
console.log(Animal.contador) //No se ha intanceado nada va 0

// console.log(Animal.size)No se puede acceder a la variable no estatica desde la clase

const dog = new Animal('Mammal','Omnivorus','Human,cars xd','Gua Guaaau');
console.log(Animal.contador) // Primera intancia 1


//console.log(dog.contador) La variable no se pinta ya que es estatica de la clase Animal

//Asi se pinta la variable no estatica, SE ASOCIA A LOS OBJETOS Y NO A LA CLASE
console.log(dog.size)

class Birds extends Animal{
    constructor(type,feeding,predator,sound){
        super(type,feeding,predator,sound);
    };
};

const parrot = new Birds('Bird','Herbivorous','Raccoons,Opossums','Imitate what they say');
//Asi es como se pinta una variable estatica desde una instancia  SE LLAMA A LA INSTANCIA Y DESDE AHI SE LLAMA A LA VARIABLE 'Variable que pertenece a la clase Animal'
console.log(Birds.contador)//Segunda intancia 2

//Asi se pinta la variable no estatica, SE ASOCIA A LOS OBJETOS Y NO A LA CLASE
console.log(parrot.size)