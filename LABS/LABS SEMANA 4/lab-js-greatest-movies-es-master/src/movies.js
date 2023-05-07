// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movies) {
    return movies.director;
    
  }) 

}
//console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(function (movies) {
    return movies.director === "Steven Spielberg" && movies.genre.includes("Drama");
  });
  return stevenMovies.length;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoreAvg = moviesArray.length>0 ? moviesArray.reduce(function (accumulator, currentValue) {
    return currentValue.score >= 0 ? accumulator + currentValue.score : accumulator;
  },0) / moviesArray.length :0;
  return Number(scoreAvg.toFixed(2));
}

//console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movies) {
    return movies.genre.includes("Drama");
  });

  return scoresAverage(dramaMovies);

}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 const  moviesNewArray = moviesArray.slice();
  return moviesNewArray.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    } else {
      return a.year - b.year;
    }
  });
}
//console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesNewArray = moviesArray.map(function (movies) {
    return movies.title;
    
  }) ;
   moviesNewArray.sort(function (a, b) {
    if (a < b) {
      return -1;

    } 
    if (a > b) {
      return 1;
      
    } 
    return 0;
  });
  return moviesNewArray.slice(0,20);
}
//console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
