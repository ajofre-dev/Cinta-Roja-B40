class Electro {
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        //this.consumo = `100${consumo}`;
        this.capacidad = capacidad;
    }

    consumo() {
        const con = this.consumo
        return `100${this.consumo}`;
    }
}

//Electro.consumoE = `100${consumoE}`;

const electro1 = new Electro(100, "Azul", 230, 30)
//const consumo1 = new consumo(9);

module.exports = {
    Electro
}

console.log(electro1)
//console.log(consumo(2))
//console.log(electro1.getconsumoE(100));