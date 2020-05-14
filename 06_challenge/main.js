

const request = require('request');
const { Banda } = require('./banda');

const obtenerBanda = (nombre) => {
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;

    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            //para hacer que el JSON se transforme de un string a un objeto y que se iguale a "respuesta"
            const respuesta = JSON.parse(body);

            if(respuesta.artists != null) {
                // Se hace una constante de los elementos entre corchetes y se toma la infomación a partir del igual
                const { strArtist, intFormedYear, strGenre, strWebsite } = respuesta.artists[0];
                const banda = new Banda(strArtist, intFormedYear, strGenre, strWebsite);
                resolve(banda);
            } else {
                reject(new Error(`No encontré a ${nombre} ${error}`))
            }
        })
    });

}

obtenerBanda("miranda")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));