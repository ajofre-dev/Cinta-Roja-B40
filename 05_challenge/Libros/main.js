const request = require('request');

//const URL = 'http://openlibrary.org/search.json?q=i+robot'

const buscaLibro = (nombre) => {
    const URL = 'http://openlibrary.org/search.json?q='
    //nombre = nombre.toLowerCase();
    nombre = nombre.replace(" ","+");


    request(`${URL}${nombre}`, (error, response, body) => {
        if (response.statusCode === 200) {
            console.log("Hay un libro");
            const respuesta = JSON.parse(body);
            console.log(`Encontré un el libro ${respuesta.docs[0].title_suggest}, escrito por ${respuesta.docs[0].author_name[0]} y ${respuesta.docs[0].author_name[1]} `);
        } else {
            console.log(`No encontré el Libro - HTTP status: ${response.statusCode} ${response.statusMessage}`);
            console.log(error);
        }
    });
}

buscaLibro();

const buscaAutor = () => {
    const URL = 'http://openlibrary.org/search.json?author=asimov'
    //nombre = nombre.toLowerCase();


    request(`${URL}`, (error, response, body) => {
        if (response.statusCode === 200) {
            console.log("Hay un libro");
            const respuesta = JSON.parse(body);
            for (let i = 0; i = respuesta.docs.length; i++);
            if (respuesta.docs.length = 5) {
                console.log(`Encontré un el libro ${respuesta.docs[i].title_suggest}, escrito por ${respuesta.docs[0].author_name[0]}`);
            } else {
            }
        } else {
            console.log(`No encontré el Libro - HTTP status: ${response.statusCode} ${response.statusMessage}`);
            console.log(error);
            

        
        }
    });
}

buscaAutor();