

// function Slider(selector){
//     this.move = this.move.bind(this);
//     this.slider = document.getElementById(selector);
//     this.interval = null;
//     this.contador = 0;
//     this.start = () =>{
//         window.setInterval(this.move,1000)
//     }
//     this.start();
//     this.movee = () =>{
//         this.contador++;
//         this.moveTo(this.contador)
//     }
//     this.moveTo = (index) =>{
//        let margin =  index * 100;
//        this.slider.getElementsByClassName('container_slider').style.left = '-'+margin+'%'
//     }
// }


class Slider {
    constructor(selector) {
        this.move = this.move.bind(this);
        this.slider = document.getElementById(selector);
        this.itemCount = document.getElementById('container_slider').childElementCount;
        this.interval = null;
        this.contador = 0;
        this.start();
        this.buildControls();
    }
    //evento que dispara todo
    start() {
        this.interval = window.setInterval(this.move, 1000)
    }
    buildControls() {
        for (let index = 0; index < this.itemCount; index++) {
            let control = document.createElement('li');
            if (index == 0) control.classList.add('active')
            document.getElementById('controls').appendChild(control);
        }
    }
    move() {
        this.contador++;
        this.contador > this.itemCount - 1 ? this.contador = 0 : this.moveTo(this.contador)
    }
    reset(){
        this.slider.querySelectorAll('#controls li.active').forEach(item => item.classList.remove('active'))
    }
    //Agrega una clase para que parezca que el control se mueve junto con la imgen
    moveTo(index) {
        this.reset()
        let margin = index * 100;
        this.slider.querySelector("#controls li:nth-child(" + (index) + ")").classList.add('active')
        document.getElementById('container_slider').style.left = '-' + margin + '%'
    }


}

(function () {
    new Slider('header')
})();