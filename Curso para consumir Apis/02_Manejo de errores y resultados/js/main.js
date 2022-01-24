const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    //Generamos un error 
    .then(response => response.jsson())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
