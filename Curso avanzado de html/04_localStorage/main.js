// window.addEventListener('load', () =>{
//     console.log('ya me cargue')
// })


window.addEventListener('load', init(),false);

const init = () =>{
    let form = document.getElementById('form');
    form.addEventListener('submit',addActivity()); 
}

const addActivity = (event) =>{
    event.preventDefault();
    let activity = document.getElementById('activity').value;
}


