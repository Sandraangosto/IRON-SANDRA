// you can use console.log() method below each of the expressions to check if your calculation was correct

const expressionOne = ((2 * 2) + 5) * 6;
    console.log(expressionOne);
const expressionTwo = ((2* 2) + (5 * 3)) - 5;
    console.log(expressionTwo);
const expressionThree = (5 * 5) / (5 * 5);
    console.log(expressionThree);
const expressionFour = 5 * 5 - 5 * 4;
    console.log(expressionFour);


//Escribe un código que encuentre el índice de la letra j en My favorite dessert is jello.


let string = "My favorite deser is Jello";
let index = string.indexOf("j");
    console.log(index);

// Instrucciones Crea tres (3) variables: una para guardar tu nombre, otra para tu apellido y una para tu edad.
// Haz que las primeras letras de tu nombre y apellido estén en mayúscula.
// Concatena tu nombre y apellido (después de poner las primeras letras en mayúscula) para crear una nueva cadena con tu nombre completo y guárdala en una variable.
// Usa el método console.log() para imprimir la frase con la siguiente estructura: My name is __________ and I am _____.

const nombre = "sandra";
const apellido = "sngosto";
const edad = "28";

const nameInCaps = name.charAt(0).toUpperCase() + name.substring(1);
console.log(nameInCaps); 
 
let surnameInCaps = surname[0].toUpperCase() + surname.slice(1);
console.log(surnameInCaps);
 
let fullName = `${nameInCaps} ${surnameInCaps}`;
 
console.log(fullName);
 
console.log(`My name is ${fullName} and I am ${age}.`);
