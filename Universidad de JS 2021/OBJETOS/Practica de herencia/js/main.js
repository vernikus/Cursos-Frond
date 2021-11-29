class Person{
    
    static contador = 0;
    constructor(name,lastName,age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        //Cuando se pone el ++ antes del contador se inicia como 1, porque primero se aumenta 
        this._idPerson = ++Person.contador; //++

    }
    get idPerson(){
        return this.idPerson;
    }
    get name(){
        return this.name;
    }
    set name (name){
         this.name = name;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    datos(){
        return `${this._name} ${this._lastName} ${this._age} ID:${this._idPerson}`
    }

}


class Employee extends Person{
    static contadorEmployee = 1;
    constructor(name,lastName,age,salary){
        super(name,lastName,age)
        this._salary = salary;
        this._idEmployee = Employee.contadorEmployee ++;
    }
    get idEmployee(){
        return this._idEmployee;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    datosEmployee(){
        return `${super.datos()} IDemployee: ${this._idEmployee} $${this._salary} `
    }
}

class Client extends Person{
    static contadorClient = 1;
    constructor(name,lastName,age,registrationDate){
        super(name,lastName,age);
        this._idClient = Client.contadorClient++;
        this._registrationDate = registrationDate;
    }
    get idClient(){
        return this._idClient;
    }
    get registrationDate(){
        return this._registrationDate
    }
    set registrationDate(registrationDate){
        this._registrationDate = registrationDate;
    }
    datosClient(){
        return `${super.datos()} IDclient: ${this.idClient} Regitration Date: ${this.registrationDate}`
    }
}

const person = new Person('Person','Pepon',55)
console.log(person)
console.log(person.datos())

const employee = new Employee('Employee','Pepon',25,1500)
console.log(employee)
console.log(employee.datosEmployee())

const client = new Client('Client','Pepon',18,'17-6-2021')
console.log(client)
console.log(client.datosClient())