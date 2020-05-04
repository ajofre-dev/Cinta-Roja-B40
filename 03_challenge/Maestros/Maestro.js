class Maestro {
    constructor(nombre, asignatura, escuela) {
        this.nombre = nombre;
        this.asignatura = asignatura;
        this.escuela = escuela;
    }
}

module.exports = {
    Maestro
}

const maestro01 = new Maestro("Alonso", "Física", "Liceo")

//console.log(maestro01)
