//clase padre

class Largometraje {
    constructor(titulo, duracion, director) {
        this.titulo = titulo;
        this.duracion = `${duracion} minutos`;
        this.director = director
        this.precio = "$3"
    }
}

//module sirve para pasar los datos a otro archivo de js
module.exports = {
    Largometraje
}