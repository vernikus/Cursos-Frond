class Animals{
    //Un uso que le podemos dar a las variables estaticas es por ejemplo agregar un ID a cada intancia que se haga
    static contador= 0; 
    size = 'small is the default'
    constructor(type,feeding,predator,sound){
        this.type = type,
        this.feeding = feeding,
        this.predator = predator,
        this.sound = sound,
        this.id = `ID: ${Animals.contador++}`;
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

const dogo = new Animals('Mammal','Omnivorus','Human,cars xd','Gua Guaaau');
//Id de la primera instancia
console.log(dogo.id)

class Birdss extends Animals{
    constructor(type,feeding,predator,sound){
        super(type,feeding,predator,sound);
    };
};

const parrott = new Birdss('Bird','Herbivorous','Raccoons,Opossums','Imitate what they say');
//Id de la segunda instancia
console.log(parrott.id)

const parakeet = new Birdss('Bird','Herbivorous','Ocelot,Iguana','Singing');
console.log(parakeet.id)//Id de ka tercer intancia
