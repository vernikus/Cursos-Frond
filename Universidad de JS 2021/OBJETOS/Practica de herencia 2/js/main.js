

class Product{
    static contador = 0;
    constructor(name,price){
        this._name = name;
        this._price = price;
        //Cuando se pone el ++ antes del contador se inicia como 1, porque primero se aumenta 
        this._idProduct = ++Product.contador;
    }
    get idProduct(){
        return this.idProduct;
    }
    get name(){
        return this._namme;
    }
    set name(name){
        return name = this.name;
    }
    get price(){
        return this._name;
    }
    set price(price){
        return price= this._price;
    }
    data(){
        return ` \nidProduct:${this._idProduct} name:${this._name} price:$${this._price}`
    }
}


class Orden{
    static contadorOrden = 0;
    static get MAX_Products(){
        return 5
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden ;
        this._products = [];
        this._contadorProducts = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    addProduct(product){
        if (this._products.length < Orden.MAX_Products){
            this._products.push(product)
        }else{
            console.error('No more products can be added')
        }
    }
    total(){
        let totalSale = 0;
        for(let index of this._products){
            totalSale += index._price;
        }
        return totalSale;
    }
    ticket(){
        let productOrden = '';
        for(let index of this._products){
            productOrden += index.data()
        }
        console.log(`Orden:${this.idOrden} Total:$${this.total()}  \nProduct:${productOrden}`)
    }
}


const prodcutOne = new Product('jeans',250);
const prodcutTwo = new Product('T-shit',180);
// console.log(prodcutOne);
// console.log(prodcutTwo);
// console.log(prodcutOne.data());
// console.log(prodcutTwo.data());

let orden = new Orden();
orden.addProduct(prodcutOne)
orden.addProduct(prodcutTwo)
console.log(orden)
orden.ticket()


