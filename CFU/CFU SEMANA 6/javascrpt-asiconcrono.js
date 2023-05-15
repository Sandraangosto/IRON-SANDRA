// setTimeout 

const hola = setTimeout(() => {
    console.log("Hello Word!");
  }, 3000);

// setInterval #1

const intervalId = setInterval(() => {
    console.log("Hello, every 3 seconds");
  }, 3000);
   
  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);

  // setInterval #2

  function countdown(duration) {
    //esto primero es para comprovar que el numero instroducido es un numerico
    if (isNaN(duration)) {
      return console.log(
        "Error: Not a number."
      );
    }
   //este IF es para comprobar que el numero que nos dan es mayor a 1 sino mensaje de error. 
    if (duration < 1) {
      return console.log("Error: Please provide a number greater than zero.");
    }
   
    let timer = duration;
   
    const intervalId = setInterval(() => {
      console.log(timer);
      timer--;
   
      if (timer === 0) {
        clearInterval(intervalId);
        console.log("Time's up!");
      }
    }, 1000);
  }
  