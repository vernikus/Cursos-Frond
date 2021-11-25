
class Person {
    constructor(name, lastName, age, hobby) {
        this.name = name,
            this.lastName = lastName,
            this.age = age,
            this.hobby = hobby
    }
    presentation() {
        console.log(`Hi my name is ${this.name} ${this.lastName} i am ${this.age} years old, and i like this ${this.hobby}`)
    }
}

const personOne = new Person('Rafal', 'Gonzales', 23, 'sports');
console.log(personOne)
personOne.presentation()

//Clase hija o instancia de la clase, INTANCIA QUE HEREDE LAS PROPIEDADES Y METODOS DE LA CLASE PADRE
class Alumno extends Person {
    constructor(name, lastName, age, hobby) {
        super(name, lastName, age, hobby);
    }
};

const alumno = new Alumno('angel', 'Bravo', 19, 'gym');
console.log(alumno);
//Se puede acceder a cualquier metodo de la clase padre mientas no sea un metodo estatico
alumno.presentation()

//Se pueden modificar los metodos desde la clase hija, llamando al metodo padre dentro de la instanci y usando el constructor super
class Docente extends Person{
    constructor(name,lastName,age,hobby){
        super(name,lastName,age,hobby);
    }
    presentation(){
        super.presentation() + console.log('Una breve descripcion de mi persona');
    }
}

const clemens = new Docente('Raúl','Clemens',28,'Read');
console.log(clemens);
clemens.presentation();

