const { Maestro } = require('./Maestro');


class Mfisica extends Maestro {
    constructor(nombre, asignatura, escuela, promedio, anios) {
        super(nombre, asignatura, escuela);
        this.promedio = [1, 2, 3, 4];
        this.anios = 5;
    }


}

    const array1 = [8, 8, 8, 8];
    const reducer = ((acumulator, currentValue) => acumulator += currentValue) / array1.length;

const Mfisica01 = new Mfisica("Alonso", "Mate", "Liceo")

console.log(array1.reduce(reducer));
console.log(Mfisica01);