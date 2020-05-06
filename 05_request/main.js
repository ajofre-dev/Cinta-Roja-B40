const request = require('request');

const buscaPokemon = (nombre) => {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
    nombre = nombre.toLowerCase();


    request(`${URL}/${nombre}`, (error, response, body) => {
        if (response.statusCode === 200) {
            console.log("Hay un Pokemon");
            // Esto funciona haciendo que los objetos escritos en string se vuelvan
            //un objeto mucho más legible
            const respuesta = JSON.parse(body);
            console.log(`Encontré a ${respuesta.name}, es un Pokemon tipo ${respuesta.types[0].type.name}`);
            //console.log(body);
        } else {
            console.log(`No encontré el Pokemon - HTTP status: ${response.statusCode} ${response.statusMessage}`);
            console.log(error);
        }
    });
}

buscaPokemon('bulbasaur');