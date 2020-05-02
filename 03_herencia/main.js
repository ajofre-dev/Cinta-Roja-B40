//Super-clase /clase padre
class mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;
    }
}

//clase hija / sub-clase
//extends es una palabra reservada que va a permitir que una clase pueda compartir elementos con otra clase

class perro extends mascota {
    constructor(nombre, patas, ladra, cola) {
        //super va va tomar los atributos de la super clase y van a colocarse los atributos de la clase.
        super(nombre, patas);
        this.ladra = ladra;
        this.comida = "Croquetas"
        this.cola = cola;
    }
}

class serpiente extends mascota {
    constructor(nombre, patas, color, venenosa) {
        super(nombre, patas);
        this.color = color;
        this.venenosa = venenosa;
    }
}

const pluto = new perro("Pluto", 4, true, true)
const khaa = new serpiente("Khaa", 0,"verde", "no")

console.log(pluto);
console.log(khaa);
