const { Maestro } = require('./Maestro');


class Mfisica extends Maestro {
    constructor(nombre, asignatura, escuela, promedio, anios) {
        super(nombre, asignatura, escuela);
        this.promedio = promedio;
        this.anios = `5 ${anios}`;
    }

        
}

//const array1 = [1, 2, 3, 4];
//const reducer = (acumulator, currentValue) => acumulator += currentValue;
//const avg = reducer/array1.length

const Mfisica01 = new Mfisica("Alonso", "Mate", "Liceo", )

//console.log(array1.reduce(avg));
console.log(Mfisica01);