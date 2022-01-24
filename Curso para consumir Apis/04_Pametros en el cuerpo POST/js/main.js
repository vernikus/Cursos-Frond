
let postParemetros = {
    title : 'foo',
    body : 'bar',
    userId : 10 
};

const url = ("https://jsonplaceholder.typicode.com/posts");

fetch(url,{
    method: 'POST',
    //Body recibe un string como parametro
    body: JSON.stringify(postParemetros)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
