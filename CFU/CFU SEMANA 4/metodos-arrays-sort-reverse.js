// Utilizando la siguiente matriz de cadenas, realice las tareas que se indican a continuación:
const arrOfStrings = ["cat", "wolf", "is", "animal"];
//Crea una copia del arreglo arrOfStrings y nómbrala strings1.
const strings1 = arrOfStrings;
console.log(strings1);
//Ordena el arreglo strings1 desde la cadena más corta hasta la más larga.
strings1.sort((a, b) => {
    return a.length - b.length;
})
//Crea otra copia del arreglo arrOfStrings y nómbrala strings2.
const strings2 = arrOfStrings
//Ordena el arreglo strings2 alfabéticamente.
strings2.sort((a, b ) => {
    return a.localeCompare(b);
});
console.log(strings2);

// SORT NUNBERS
//Crea una función llamada sortNumbers que tome un arreglo de números como argumento. La función debería devolver un nuevo arreglo que sea una copia del arreglo original, conteniendo los mismos números en orden ascendente.
// Expected Result

const numbers = [2, 5, 9, 7, 1, 8, 4, 3, 6];

console.log(sortNumbers(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sortNumbers = (arr) => {
    const arrayCopy = arr.slice();
    arrayCopy.sort ((a,b) a - b);
    return arrayCopy;
}

//Reverse strings
// Invierta la cadena name proporcionada a continuación y console.log su valor después de haber sido invertida.

const name = "ivan";

const reversedString = name.split("").reverse().join("");
 
console.log(reversedString);
 
// REVERSE NUMBERS 
//Copia y revierte el arreglo numbers.
const numbers1 = [3, 5, 6, 2];
const reversed = numbers.split().reverse();

console.log(reversed);
console.log(numbers1);

//Copia y ordena el arreglo numbers y luego reviértelo.

const sortedAndReversed = numbers.slice().sort().reverse();

console.log(sortedAndReversed);
console.log(numbers1);


