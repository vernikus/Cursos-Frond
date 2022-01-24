//Los parametros query son los que en una url se separan por medio del signo ?
//Por estandar de fetch el link o api se tiene que guardar en una instancia del objeto URL, ademas de que asi se puede acceder a sus propiedades
//const url = new URL("https://jsonplaceholder.typicode.com/posts?userId=1");//Esta es una manera de pedir parametros query


//Por estandar los parametros query se tendrian que pasar mediante un objeto
let parametros = {
    userId : 1,
    _limit : 3 //limit es una propiedad del objeto URL si no se hubiera intancedo nunca se podrian acceder a este valor
};

const url = new URL("https://jsonplaceholder.typicode.com/posts");
//Se le agregan los parametros al objeto
Object.keys(parametros).forEach((paramKey =>{
    //Se agregan los parametros al enlace
    url.searchParams.append(paramKey,parametros[paramKey])
}))

//En href salen los parametros query
console.log(url)


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
