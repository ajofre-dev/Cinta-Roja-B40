const { Electro } = require('./electro');

class Lavadora extends Electro {
    constructor(precio, color, capacidad, carga, consumo) {
        super(precio, color, capacidad);
        this.carga = carga;
        this.consumo = consumo;
    }
    precioFInal(){
        return this.carga * this.consumo;
    }

}

const lavadora = new Lavadora(100, "Azul", 30, 20, 10);


console.log(lavadora);
console.log(lavadora.precioFInal());

