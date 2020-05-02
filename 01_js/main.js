//JS
var nombre = "Alba";

//ES6
let x = 5; // para las que van a cambiar de valor
const y = 3.1416; //no van a cambiar su valor


console.log("Hola mi nombre es " + nombre);

// para hacer concatenación de manera sencilla se usa String template
console.log(`Hola mi nombre es ${nombre} y mi edad es ${x}`);

//Manera antigua
function miFuncion() {
    return "Mi función se ejecutó"
}

var valor = miFuncion();
console.log(valor);

//manera moderna arrow functions
const suma = (a, b) => {
    return a + b;
}

// otra forma de verlo más simplificado es la siguente, sin corchetes
//const suma = (a,b) => a + b ;

//la constante se hace fuera de la función
const resultado = suma(8, 9);
console.log(resultado);


let array = [1, 2, 3, 4, 5];

for (let i=0; i<=array.length; i++){
    console.log(`array en el índice {i} = ${array[i]}`);
}

let comp ={
    color: "Plateada",
    marca: "Apple",
    encendida: true,

    //método
    obtenerInfo: () => `Esta comptadora es ${comp.color}, marca ${comp.marca}`
}
console.log(comp.obtenerInfo());