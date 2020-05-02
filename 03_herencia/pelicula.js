const { Largometraje } = require('./largo');


class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, cast, tema) {
        super(titulo, duracion, director)
        this.cast = cast;
        this.tema = tema;
        this.precio = "$5"
    }
}

const mulan = new Pelicula("Mulan", 120, "Tony", "Mulan", "Caricaturas");

const spiderman = new Pelicula("Spiderman", 100, "Desconocido", "Peter", "Acción");

//console.log(spiderman);

module.exports = {
    mulan, spiderman
}