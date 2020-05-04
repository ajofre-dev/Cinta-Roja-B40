const { Construcciones } = require('./construccion');


class Casa extends Construcciones{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        super(numPuertas, numVentanas, numPisos, direccion)
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }

    metrosCuadrados () {
        return (this.largo * this.ancho) * this.numPisos
    }

    direccionVieja () {
        return `La dirección es ${this.direccion}`
    }
}

const casa01 = new Casa(3, 5, 2, "Avenida 5 de Mayo, 23", 20, 10, 30);

console.log(casa01);
console.log(casa01.metrosCuadrados());
console.log(casa01.direccionVieja());