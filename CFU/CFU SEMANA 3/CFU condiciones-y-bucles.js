//APRENDIENDO A UTILIZAR EL (IF, ELSE, ELSE IF)

const language = prompt(
    "Por favor seleccione su idioma - opciones: Español, Ingles, Frances); "
)
const name = prompt("Por favor instroduzca su nombre: ");

if (language === "Español") {
    console.log(`hola, ${name}`);
}   else if (language === "Ingles"){
    console.log(`Hello, ${name}`);
} else if (language === "Frances") {
    console.log(`Salut, ${name}`);
} else {
    console.log("No estoy segura del idioma que estas usando")
}

//APRENDIENDO A USAR EL SWITCH

const language2 = prompt("Please enter the language - (options: Spanish, French, English): ");
const name2 = prompt("Please enter your name: ");
 
switch (language2) {
  case "Spanish":
    console.log(`Hola, ${name2}!`);
    break;
  case "French":
    console.log(`Salut, ${name2}!`);
    break;
  case "English":
    console.log(`Hello, ${name2}!`);
    break;
  default:
    console.log("I am not sure which language that is! Sorry!");
}

    // Otro ejemplo de switch

    const name3 = prompt("Your favorite Game of Thrones character?");
 
let house = "";
switch (name3) {
  case "Daenerys":
    house = "Targaryen";
    break;
  case "Jon Snow":
  case "Sansa":
  case "Arya":
    house = "Stark";
    break;
  case "Tyrion":
  case "Cersei":
    house = "Lannister";
    break;
}
 
console.log(`Your favorite character is from the house ${house}.`);


//BUCLES

// iteration 1
 
let i = 0;
while (i <= 30) {
  console.log(i);
  i++; // this is the same as i = i + 1
}

// iteration 2
 
i = 0;
while (i < 30) {
  i++; // this is the same as i = i + 1
  if (i === 10) {
    console.log("ten");
  } else if (i === 20) {
    console.log("twenty");
  } else if (i === 30) {
    console.log("thirty");
  } else {
    console.log(i);
  }
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
            