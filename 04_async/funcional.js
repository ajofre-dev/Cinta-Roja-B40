const array = [1, 4, 6, 2, 8]

array.forEach(element => console.log(element));

//let arrayNuevo = []

//for (let i = 0; i < array.length; i++) {
//   arrayNuevo[i] = array [i] * 2
//}

//const arrayNuevo = array.map((x) => x * 2);
//console.log(arrayNuevo);

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        arrayNuevo.push(array[i]);
    }
}

//const arrayNuevo = array.filter(element => element %2 === 0);

console.log(arrayNuevo);