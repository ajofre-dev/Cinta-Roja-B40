

//variables primitivas
var string = "Gerardo";
var number = 24;
var boolean = true;

//variables compuestas
var array = [1, 2, 3, 4, 5, 6, 7];

//json
//Java Script Obet Notation
//Abstracción de algo real que se plasma el código. Van a estar representando a algo real
//las llaves son lo que nos indican que son objetos. En este caso auto es el objeto
var auto = {
    color: "Rojo",
    velocidad: 180,
    ruedas: 4,
    motor: "V10",
    deportivo: true,
    //cuando hay una función dentro de un objeto se llama método
    //la función arranca va a lanzar una alerta con el texto Auto arranca
    arranca: function () {
        alert("Auto arranca");
    },
    // la función frena va a lanzar una alerta con el texto El auto frena
    frena: function () {
        alert("El auto frena")
    },
    // la función dobla va a lanzar una alerta con el texto el auto ha doblado
    dobla: function () {
        alert("El auto ha doblado")
    }
}

console.log(auto); // esto hace que se llame al objeto y muestra sus atributos
console.log(auto.color); //muestra el objeto auto en su caractéristica color
console.log(auto.ruedas); // muestra el cobjeto auto en su característica ruedas

var perro = {
    nombre: "Ayudante de santa",
    raza: "Galgo",
    color: "Marrón",
//concatenación se refiere a la suma de dos variales como lo que sucede en la alerta
//la palabra reservada this funciona para traer el atributo de un objeto
    ladrar:function () {
        alert(this.nombre + " ha ladrado");
    }
}

console.log(perro);
// se llama a la función y el método del objeto, en este caso el objeto es perro y la función ladrar es el método que se estableció
perro.ladrar();

//return sirve para que en las funciones nos devuelvan un valor, de lo contrario JS no entiene que debe almacenar el valor
// ese valor se puede asignar a una variable

var perroLadra = perro.ladrar();

//Los navegadores serán el apoyo para hacer de intérprete o motor para ejecutar 
//las líneas de código.
//Los navegadores serán los encargados de leer el código en html.