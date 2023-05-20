// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

// PASO 1 ORDENAR LA LISTA

getInstruction(
  "mashedPotatoes", 
  0, 
  (step) => {
  document.querySelector("#mashedPotatoes")
  .innerHTML += `<li>${step}</li>`;
  getInstruction(
    "mashedPotatoes", 
    1, 
    (step) => {
    document.querySelector("#mashedPotatoes")
    .innerHTML += `<li>${step}</li>`;
    getInstruction(
      "mashedPotatoes", 
      2, 
      (step) => {
      document.querySelector("#mashedPotatoes")
      .innerHTML += `<li>${step}</li>`;
      getInstruction(
        "mashedPotatoes", 
        3, 
        (step) => {
        document.querySelector("#mashedPotatoes")
        .innerHTML += `<li>${step}</li>`;
        getInstruction(
          "mashedPotatoes", 
          4, 
          (step) => {
          document.querySelector("#mashedPotatoes")
          .innerHTML += `<li>${step}</li>`;
          getInstruction(
            "mashedPotatoes", 
            5, 
            (step) => {
            document.querySelector("#mashedPotatoes")
            .innerHTML += `<li>${step}</li>`;
  
              setTimeout(() => {
                document.querySelector("#mashedPotatoes").innerHTML += '<li>Mushed potatoes is ready</li>';
                document.querySelector("mashedPotatoesImg").removeAttribute("hidden");
              })
              .catch((error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// CREANDO LA NUEVA LI CON EL ULTIMO PASO DE LA RECETA


// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 1);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 2);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 3);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 4);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 5);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 6);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction("steak", 7);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 1000);
  })
  .catch((error) => console.log(error));



// Iteration 3 using async/await
const makeBroccoli = async () => {
  //variable para poder apuntar a la funcion obtainInstruction para poder pasar la lista

  let step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

  let step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

  let step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

  let step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

  let step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

  let step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

  let step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

  setTimeout(() => {
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }, 1000);
};


  makeBroccoli();


// Bonus 2 - Promise all

let step0 = obtainInstruction("busselsSprouts", 0);
let step1 = obtainInstruction("busselsSprouts", 1);
let step2 = obtainInstruction("busselsSprouts", 2);
let step3 = obtainInstruction("busselsSprouts", 3);
let step4 = obtainInstruction("busselsSprouts", 4);
let step5 = obtainInstruction("busselsSprouts", 5);
let step6 = obtainInstruction("busselsSprouts", 6);
let step7 = obtainInstruction("busselsSprouts", 7);


const makeSprouts = async () => {
  try {
    let valores = await Promise.all([
      step0,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
    ]);
valores.forEach((posocionDelArray) =>{
  document.querySelector("brusselsSProuts")
  .innerHTML += `<li>${posicionDelArray}</li>;`
});
setTimeout(() => {
  document.querySelector("#brusselsSprouts")
  .innerHTML += `<li>Brussels sprouts are ready</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}, 1000);

  } catch (error) {
    console.log(error);
    alert(error);
  }
};
makeSprouts();