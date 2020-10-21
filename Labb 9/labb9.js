// Funktion 1
const hello = () => console.log("Hello World");
// console.log(hello());

// Funktion 2
const greet = name => console.log("Hej " + name + " hur mår du?");

// Funktion 3
const calc = (numberOne,numberTwo) => numberOne + numberTwo;
console.log(calc(1,5));

//Funktion 4
const tip = (sum, percent) => { 
    percent = percent / 100
    let total = sum + sum * percent
    return total;
} 

console.log(tip(2500, 7))