class persona {
    constructor(
        nombre,
        edad,
        apellidoPaterno,
        apellidoMaterno,
        diaNacimiento,
        mesNacimiento,
        sexo,
        peso,
        altura
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.diaNacimiento = diaNacimiento;
        this.mesNacimiento = mesNacimiento;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        //KG / altura en metros al cuadrado)
        return this.peso / (this.altura * this.altura);
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} es mayor de edad`;
        } else {
            return `${this.nombre} es menor de edad`;
        }
    }
}
const persona1 = new persona(
    "Elena",
    32,
    "Perez",
    "Gonzalez",
    18,
    01,
    "Femenino",
    56,
    1.6
);
console.log(persona1.calcularIMC());
console.log(persona1.esMayorDeEdad());