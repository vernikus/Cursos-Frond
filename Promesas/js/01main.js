const GET = (url) =>{
    //Acuerdate que se tiene que regresar una promesa, entonces es de ahuevo que se ponga el return 
    return new Promise((resolve,reject)=>{
        //Hacemos la solicitud por medio de un XML 
        let ajaxCall = new XMLHttpRequest();
        
        //Se hace la peticion con un open get hacia la url 
        ajaxCall.open('GET',url)

        //Cuadno se ejecute esta funcion es que la peticion se termino de cargar
        ajaxCall.onload = function(){
            //Si el estado es igual a 200 todo salio bien 
            ajaxCall.status == 200 ? resolve(ajaxCall.response) : reject(Error(ajaxCall.status))
        }

        ajaxCall.onerror = function(err){
            reject(err)
        }

        //Mandamos la peticion
        ajaxCall.send();
    })
}

//Obtenemos la informacion del usuario 
const getUser = (username) =>{
    return GET("https://api.github.com/users/"+username)
}

//Traemos la propiedad a la que queremos ingresar 
const getRepos = (urlRepos) =>{
    //console.log(urlRepos)
    return GET(urlRepos)
}

//para no caer en un callbackhell hacemos los siguiente
const getReposPromise = () =>{
    getUser('vernikus')
    .then(response => {
        getRepos(JSON.parse(response).repos_url)
        .then(response => console.log(response))
        .catch(response => console.log(response))
        //return getRepos(JSON.parse(response).repos_url)
    })
    .catch(console.log)
}

getReposPromise()
//Se supone que tendria que funcionaer pero no funciona :,v
/*.then(response => console.log(response))
.catch(response => console.log(response))*/


//Si quisieramos perdir otra cosa caeriamos en un callbackhell
// getUuser('vernikus')
// .then(response => {
//     //Parseamo el objeto a json 
//     let responseJOSN = JSON.parse(response)
//     //console.log(responseJOSN.repos_url);
//     getRepos(responseJOSN.repos_url)
//     .then(repos => console.log(repos))
// })
// .catch(e => console.log(e))