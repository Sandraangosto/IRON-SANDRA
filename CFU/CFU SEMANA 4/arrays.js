// METODOS BASICOS DE ARRAYS

// Usando el siguiente array de strings, realiza las siguientes tareas:
const favorites = ["javascript", "html", "css"];

//Elimina el primer elemento
favorites.shift();
console.log(favorites);

//Elimina el último elemento
favorites,pop();
console.log(favorites);

//Agrega el string "react" al principio del array
favorites.unshift('react');
console.log(favorites);

//Agrega el string "react" al final del array
favorites.push("react");
console.log(favorites);

// Elimina el elemento en la posición 2 y agrega el string "express" en su lugar
favorites.splice(1, 1, 'express');
console.log(favorites);

// Elimina los elementos en las posiciones 2 y 3 y agrega el string "mongodb" en su lugar
favorites.splice(2, 3, 'mongodb');
console.log(favorites);

// ITERAR SOBRE MATRICES

// Usando el bucle for, imprime cada elemento del array

const fruits = ["apple", "plum", "strawberries"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const elemOfArr of fruits) {
    console.log(elemOfArr);
  }

// Usando el método .forEach(), imprime el valor de cada elemento y su índice junto al propio elemento.

fruits.forEach(function(elem, index){
    console.log(`${elem} ------> ${index}`);
  })
