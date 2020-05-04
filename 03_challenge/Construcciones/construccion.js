class Construcciones {
    constructor(numPuertas, numVentanas, numPisos, direccion) {
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
    }

}

const edif1 = new Construcciones(2, 5, 1, "Avenida 5, 342")

console.log(edif1)

module.exports = {
    Construcciones
}