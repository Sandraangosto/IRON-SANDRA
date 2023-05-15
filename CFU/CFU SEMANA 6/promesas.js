// PROMESAS 1

const cityWeather = {
    Madrid: 20,
    Barcelona: 22,
    Paris: 18,
    Berlin: 15,
  };
  
  function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!cityWeather[city]) {
            reject("City not found.");
          } else {
            resolve(`The current temperature in ${city} is ${cityWeather[city]}°C`);
          }
        }, 2000);
      });
    }
     
    // invocar las promesas

    getWeather("Barcelona")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
     
    getWeather("Paris")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
     
    getWeather("Rome")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

// PROMESAS 2

    function delayedLog(time, message) {
        return new Promise((resolve, reject) => {
          if (time < 0) {
            reject("Error: Invalid time");
          } else {
            setTimeout(() => {
              console.log(`${time} seconds later - ${message}`);
              resolve();
            }, time * 1000);
          }
        });
      }
       
      delayedLog(2, "Hello")
        .then(() => delayedLog(3, "World"))
        .catch((error) => console.log(error));

// PROMESAS 3

function sumTwoNumbers(num1, num2, delayInMilliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
          reject("Invalid Input");
        } else {
          const sum = num1 + num2;
          resolve(
            `Result given after ${delayInMilliseconds} milliseconds --> ${sum}`
          );
        }
      }, delayInMilliseconds);
    });
  }
   
  sumTwoNumbers(5, 10, 2000)
    .then((sum) => {
      console.log(sum);
    })
    .catch((error) => {
      console.log(error);
    });

   
  sumTwoNumbers(21, 100, 4000)
    .then((sum) => {
      console.log(sum);
    })
    .catch((error) => {
      console.log(error);
    });
   
 


  
  