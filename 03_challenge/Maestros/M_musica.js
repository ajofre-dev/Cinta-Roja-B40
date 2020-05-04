const { Maestro } = require('./Maestro');

class Mmusica extends Maestro {
    constructor(nombre, asignatura, escuela, promedio, anios) {
        super(nombre, asignatura, escuela);
        this.caltotal = 3;
        this.cal1 = 8;
        this.cal2 = 8;
        this.cal3 = 8;
        this.edad = 33;
    }
    promedio(x) {
        const suma = this.cal1 + this.cal2 + this.cal3 / x
    }
}

const Mmusica01 = new Mmusica("Ernesto", "Musica", "Liceo")

console.log(Mmusica01);
console.log(Mmusica01.promedio(3));