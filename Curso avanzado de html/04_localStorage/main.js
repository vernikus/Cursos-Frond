// window.addEventListener('load', () =>{
//     console.log('ya me cargue')
// })


// window.addEventListener('load', init(),false);


let storage;
let clave = 'tutorial_list'

const init = () =>{
    let form = document.getElementById('form');
    form.addEventListener('submit',addActivity()); 
}

const addActivity = (event) =>{
    event.preventDefault();
    let activity = document.getElementById('activity').value;
}

function Lista(clave){
    this.clave = clave;
    this.agregarActividad = (actividad) =>{
        if(localStorage.getItem(clave) != undefined){
            let actividades = JSON.parse(localStorage.getItem(this.clave));
        }else{
            let actividades = [];
        }
        actividades.push(actividad);
        localStorage.setItem(this.clave,JSON.stringify(actividades));
    }
    this.obtenerActividades = () =>{
        if(localStorage.getItem(clave) != undefined){
           return JSON.parse(localStorage.getItem(this.clave));
        }
    }
    this.eliminarActividades = () =>{
        
    }
}

