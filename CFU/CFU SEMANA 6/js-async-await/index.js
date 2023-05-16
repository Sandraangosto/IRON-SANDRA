// async function someFunction() {
//     return true;
//   }
  
//   someFunction().then((value) => console.log(value)); // true
  
// // EJEMPLO 

//   const directions = [
//     "Starting point: Ironhack Paris",
//     "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//     "← Turn left onto Rue Chanzy",
//     "* Café Titon, 34 Rue Titon, 75011 Paris, France",
//   ];
  
//   function obtainDirections(step) {
//     return new Promise((resolve, reject) => {
//       // setTimeout(() => {
//       console.log(directions[step]);
  
//       if (!directions[step]) reject("Instructions not found.");
//       else resolve();
//       // }, 2000);
//     });
//   }
  
//   async function getCoffee() {
//     try {
//       await obtainDirections(0);
//       await obtainDirections(1);
//       await obtainDirections(2);
//       await obtainDirections(3);
  
//       // This will result in a rejected Promise as direction step 4 doesn't exist:
//       await obtainDirections(4);
  
//       console.log("You arrived at your destination!");
//     } catch (error) {
//       console.log("Something went wrong: ", error);
//     }
//   }
  
//   getCoffee();

// // EJEMPLO
  
//   fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonResponse) => {
//     console.log("Parsed response: ", jsonResponse);
//   })
//   .catch((err) => console.log("Something went wrong!", error));

//   // EJEMPLO 

//   async function displayMissionPatches() {
//     try {
//       const response = await fetch("https://api.spacexdata.com/v4/launches");
//       const jsonResponse = await response.json();
  
//       console.log("Parsed response: ", jsonResponse);
//     } catch (err) {
//       // Handle error or a rejected Promise
//       console.log("Something went wrong!", error);
//     }
//   }
  
//   displayMissionPatches();
  

//   // EJEMPLO

//   async function displayMissionPatches(limit = 0) {
//     try {
//       const response = await fetch("https://api.spacexdata.com/v4/launches");
//       const jsonResponse = await response.json();
  
//       console.log(jsonResponse);
//       const launchesToDisplay = jsonResponse.slice(0, limit);
  
//       launchesToDisplay.forEach((launchObj) => {
//         const patchImage = launchObj.links.patch.small;
//         const imgElement = document.createElement("img");
  
//         imgElement.setAttribute("src", patchImage);
//         imgElement.setAttribute("width", 200);
//         document.body.appendChild(imgElement);
//       });
//     } catch (error) {
//       // Handle error or a rejected Promise
//       console.log("Something went wrong!", error);
//     }
//   }
  
//   displayMissionPatches(10);

  // EJEMPLO GUIADO 


  const psuedoAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 1000);
    });
  };

  
  const foo = async () => {
    try {
      const res = await psuedoAsync();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    console.log("After calling psuedoAsync");
  };
   
  foo();
    

  