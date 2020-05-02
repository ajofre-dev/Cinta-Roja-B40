const { hitler } = require('./documental');
const { mulan, spiderman } = require('./pelicula');

console.log(hitler);
console.log(mulan);


class Cine {
    constructor(nombre, butacas, pantallas, cadena) {
        this.nombre = nombre;
        this.butacas = butacas;
        this.pantallas = pantallas;
        this.cadena = cadena;
    }


reproducirLargometraje(contenido) {
    return `Se está reproduciendo ${contenido.titulo}`;
}

}

const pandemic = new Cine("Pandemic", 20, 4, "Cinemark");

console.log(pandemic.reproducirLargometraje(spiderman));