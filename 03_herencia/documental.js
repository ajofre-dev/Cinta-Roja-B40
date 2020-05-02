const { Largometraje } = require('./largo');


class Documental extends Largometraje {
    constructor(titulo, duracion, director, patrocinador, productor) {
        super(titulo, duracion, director)
        this.patrocinador = patrocinador;
        this.productor = productor;
    }
}

const hitler = new Documental("Hitler", 60, "Desconocido", "History", "Sony");

module.exports = {
    hitler
}