//vamos a declarar una clase
class perro {
    //Metodo constructor
    constructor(raza, tamanio, nombre){
        console.log("Se ejecutó el constructor");
        this.raza = raza;
        this.tamanio = tamanio;
        this.nombre = nombre;
    }

    comer(comida) {
        if(comida === "croquetas") {
            return "Perro feliz";
        } else {
            return "Perro triste";
        }
    }

    saludo() {
        return `Hola, mi nombre es ${this.nombre}`;
    }

    //Estos son getters de Java y se usa como si fuera un scooby.nombre
    getNombre(){
        return this.nombre
    }
    // Así como getters hay setter que renombran los atributos, también viene de Java

    setNombre(nombre) {
        this.nombre = nombre;
    }
}

//Instancia de mi clase perro
const snoopy = new perro ("Beagle", "pequeño", "Snoopy");
const scooby = new perro ("Gran danés", "grande", "Scooby");

console.log(snoopy);
console.log(scooby);

console.log(snoopy.comer("croquetas"));
console.log(scooby.comer("tacos"));

console.log(snoopy.saludo())

console.log(scooby.getNombre());

