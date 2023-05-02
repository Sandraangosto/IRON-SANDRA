// Declara una variable llamada num y le asigna el valor de -10.
let num = -10; 
// Declara una variable llamada isEven y le asigna el valor inicial de false.
let isEven  = false;
//Luego, verifica si el valor almacenado en num es par (even) o impar (odd). Si es par, cambia el valor de isEven a true, de lo contrario deja isEven como false.
if (num % 2 === 0) {
    isEven = true;
}
// Declara una variable llamada isPositive y le asigna el valor inicial de false.
let isPositive = false;
//Luego, verifica si el valor almacenado en num es un número positivo y cambia el valor de isPositive a true si es un número positivo.
if (num > 0) {
    isPositive = true;x
}
// Declara una variable llamada isNegative y le asigna el valor inicial de false.
let isNegative = false; 
// Luego, verifica si num es un número negativo (menor que 0) y cambia el valor de isNegative a true si es un número negativo.
if (num < 0){
    isNegative = true;
}
//Imprime en la consola los valores de isEven, isPositive y isNegative.
console.log(isEven);
console.log(isPositive);
console.log(isNegative);