// Declara una variable global x y asígnale el valor de 10.
let x = 10; 
// Declara una función myFunction y dentro de ella, declara una variable local y y asígnale el valor de 5.
function myFunction() {
    let y = 5;
}
//Imprime en la consola el valor de las 4. variables x e y dentro de la función.
console.log("outer - global --> x: ", x);
console.log("inside the function - global scoped --> x: ", x);
console.log("inside the function - block scoped --> y: ", y);
//Imprime en la consola el valor de las variables x e y fuera de la función en el ámbito global.
console.log("outer - global --> x: ", x);
// Declara un bloque simple usando {} y dentro de él, declara una variable de ámbito de bloque x y asígnale el valor de 2.
{
    let x = 2;
    console.log("inner - block scoped --> x:", x);
  }
// Imprime en la consola el valor de x dentro del bloque y fuera de él.
console.log("inner - block scoped --> x:", x);

// Escribe un párrafo explicando lo que has aprendido de los pasos anteriores.
//he aprendido a aplicar las variables de bloque y el alcance que tienen y cual tiene preferencia en caso de tener el misnmo nombre.

