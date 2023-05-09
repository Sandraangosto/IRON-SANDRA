// DOM 1

let enlace = document.getElementById("google-link");
enlace.href = "http://www.google.com";


// DOM 2
// esto es para que abra el enlace en una pestaña nueva. 
enlace.target = "_blank";

// DOM 3
// eliminar la clase en un parragrafo
const parahraph = document.querySelector("p");
parahraph.classList.remove("example-class");

