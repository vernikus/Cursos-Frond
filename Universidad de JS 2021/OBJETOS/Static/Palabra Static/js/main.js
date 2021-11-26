class Animal{
    constructor(type,feeding,predator,sound){
        this.type = type,
        this.feeding = feeding,
        this.predator = predator,
        this.sound = sound
    }
    soundd(){
        return this.sound
    };
    //Un metodo estatico se asocia con la clase pero no con los objetos o instancias que se crean de este
    static description(){
        console.log(`This animal is of type ${this.type} ist diet is ${this.feeding}`);
    };
    //Se le pasa como parametro un objeto que puede se llamano como sea EL NOMBRE ES COMO DECLARAR UNA VARIABLE
    static predator(animal){
        console.log(`My natural predators are ${animal.predator}`)
    }
};

const dog = new Animal('Mammal','Omnivorus','Human,cars xd','Gua Guaaau');
//dog.description(); El metodo no se ejecuta ya que es estatico de la clase Animal

//A un metodo estatico se le puede pasar como parametro un objeto, SE EJECUTA EL METODO DEL PADRE Y SE LE PASA COMO PARAMETRO EL OBJETO, asi el objeto podra usar
Animal.predator(dog)


class Birds extends Animal{
    constructor(type,feeding,predator,sound){
        super(type,feeding,predator,sound);
    };
};

const parrot = new Birds('Bird','Herbivorous','Raccoons,Opossums','Imitate what they say');

//Asi es como se ejecuta un metodo estatico desde una instancia  SE LLAMA A LA INSTANCIA Y DESDE AHI SE INVOCA AL METODO
Birds.predator(parrot);