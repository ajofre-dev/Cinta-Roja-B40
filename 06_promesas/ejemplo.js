//Promesas tiene tres resultados


const promesa = new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10);

    setTimeout(() => {
        numero > 5
            // operador ternario: ? si se cumple la condicion
            // operador ternario: : si no se cumple la condicion
            ? resolve(`${numero} es mayor a 5`)
            : reject(new Error(`${numero} no es mayor a 5`));
        //if (numero > 5) {
        //    resolve(`${numero} es mayor a 5`);
        //} else {
        //   reject(new Error(`Error: ${ numero } no es mayor a 5`);

    }, 5000);
});

//console.log(promesa);

promesa
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
