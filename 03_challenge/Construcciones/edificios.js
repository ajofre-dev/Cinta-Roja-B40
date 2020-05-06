const { Construcciones } = require('./construccion');


class Edificio extends Construcciones{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, ndireccion) {
        super(numPuertas, numVentanas, numPisos, direccion)
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
        this.ndireccion = ndireccion
    }

    metrosCuadrados () {
        return (this.largo * this.ancho) * this.numPisos
    }

    direccionVieja () {
        return `La dirección es ${this.direccion}`
    }

    direccionNueva () {
        return `La dirección nueva es ${this.ndireccion}`
    }
}

const edificio01 = new Edificio(3, 5, 10, "Avenida 5 de Mayo, 23", 20, 10, 30, "Andador 20 de N");

console.log(edificio01);
console.log(edificio01.metrosCuadrados());
console.log(edificio01.direccionVieja());
console.log(edificio01.direccionNueva());