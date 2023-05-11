const data = {
    name: {
      firstName: "ana",
      lastName: "marino",
    },
    isStudent: true,
    favoriteFootballTeam: "fc barcelona",
    hometown: {
      city: "buenos aires",
      country: "argentina",
    },
  };

  const {
    name: { firstName, lastName },
    favoriteFootballTeam,
    hometown: { city, country },
  } = data;
   
  console.log(
    `Student ${firstName} ${lastName} from ${city} (${country}) loves ${favoriteFootballTeam}`
  );

  // DESESTRUCTURAR ARRAYS

  //CASO 1
  const [a1, b1] = [1, 10];

  console.log(a1 * b1); // <== 10
  



  // CASO 2

  const [a, b = 1] = [2];
 
  console.log(a * b); // <== 2

  // Desestructuración de parámetros de función

  const greenSmoothie = {
    leaf: "spinach",
    veggie: "bok choy",
    seed: "ground flex seeds",
    nut: "peanut",
    liquid: "almond milk",
  };

  
  function getIngredients({ leaf, veggie, seed, nut, liquid }) {
  
    return `To make a smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
  }
   
  getIngredients(greenSmoothie);