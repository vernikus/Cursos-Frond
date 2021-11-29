class Entry{
    constructor(typeEntry,brand){
        this._typeEntry = typeEntry;
        this._brand = brand;
    }
    get typeEntry(){
        return this._typeEntry;
    }
    set typeEntry(typeEntry){
        return this._typeEntry = typeEntry;
    }
    get brand(){
        return this._brand;
    }
    set brand(brand){
        return this._brand = brand;
    }
}
class Monitor{
    static accountantMonitors = 0;
    constructor(brand,size){
        this._brand = brand;
        this._size = size;
        this._idMonitor = ++Monitor.accountantMonitors;
    }
    get idMonitor(){
        return this.idMonitor;
    }
    get brand(){
        return this._brand
    }
    set brand(brand){
        return this._brand = brand;
    }
    get size(){
        return this._size;
    }
    set size(size){
        return this._size = size;
    }
    dataMonitor(){
        return `brand:${this._brand} size:${this._size} idMonitor:${this._idMonitor}`
    }
}
class Computer{
    static accountantComputer = 0;
    constructor(monitor,mouse,keyboard ){
        this._monitor = monitor;
        this._mouse = mouse;
        this._keyboard = keyboard;
        this._idComputer = ++Computer.accountantComputer;
    }
    get idComputer(){
        return this._idComputer;
    }
    get monitor(){
        return this._monitor
    }
    set monitor(monitor){
        return this._monitor = monitor;
    }
    get mouse(){
        return this._mouse;
    }
    set mouse(mouse){
        return this._mouse = mouse;
    }
    get keyboard(){
        return this._keyboard;
    }
    set keyboard(keyborad){
        return this._keyboard = keyborad;
    }
    dataComputer(){
        return `\nidComputer${this._idComputer} \nMonitor: ${this._monitor.dataMonitor()} \nMouse: ${this._mouse.info()} \nKeyboard: ${this._keyboard.info()} `
    }
}
class Orden{
    static accountantOrden =0;
    constructor(){
        this._ordenComputers = [];
        this._idOrden = ++Orden.accountantOrden;
    }
    get idOrden(){
        return this._idOrden;
    }
    addComputer(computer){
        this._ordenComputers.push(computer);
    }
    showComputer(){
        let computers = '';
        for(let index of this._ordenComputers){
            computers += index.dataComputer();
        }
        return console.log(`idOrden:${this._idOrden} \nComputer(s): ${computers}`)
    }
}
class Mouse extends Entry{
    static accountantMouses = 0;
    constructor(typeEntry,brand){
        super(typeEntry,brand);
        this._idMouse = ++Mouse.accountantMouses;
    }
    get idMouse(){
        return this._idMouse;
    }
    info(){
        return `typeEntry:${this._typeEntry} brand:${this.brand} idMouse:${this._idMouse}`
    }
}
class Keyboard extends Entry{
    static accountantKeyboard = 0;
    constructor(typeEntry,brand){
        super(typeEntry,brand);
        this._idKeyboard = ++Keyboard.accountantKeyboard;
    }
    get idKeyboard(){
        return this._idKeyboard;
    }
    info(){
        return `typeEntry:${this._typeEntry} brand:${this.brand} idKeyboard:${this._idKeyboard}`
    }
}

const mouseOne = new Mouse('c','Logitech');
const keyboardOne = new Keyboard('d','Logitech');
const monitorOne = new Monitor('Ninja','Ls');
const computerOne = new Computer(monitorOne,mouseOne,keyboardOne);

const mouseTwo = new Mouse('c','Logitech');
const keyboardTwo = new Keyboard('d','Logitech');
const monitorTwo = new Monitor('Ninja','Ls');
const computerTwo = new Computer(monitorTwo,mouseTwo,keyboardTwo);

const orden = new Orden();
orden.addComputer(computerOne)
orden.addComputer(computerTwo)

console.log(mouseOne.info())
console.log(keyboardOne.info())
console.log(monitorOne.dataMonitor())
console.log(computerOne.dataComputer())
console.log(orden.showComputer())
