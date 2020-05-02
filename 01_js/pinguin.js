let myPenguin = {
    name: "Duke",
    origin: "Ark",
    creator: "Mort",
    notes: "One pasanger on board",

    welcome: () => `Hola, mi nombre es ${myPenguin.name}`
}

myPenguin.puedeVolar = false;

console.log(myPenguin);
console.log(myPenguin.welcome());
