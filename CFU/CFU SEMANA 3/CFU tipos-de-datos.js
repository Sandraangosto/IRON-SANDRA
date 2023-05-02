//interaccion 1
const name = {
    name: "Sandra",
    id: 8
};
//interaccion 2 
const book1 = {
    title: "Harry Potter y el misterio del príncipe",
    author: "J. K. Rowling",
    isbn: "9781644732120",
    category: "Fantasia",
  };
  const book2 = {
    title: "Harry Potter y las Reliquias de la Muerte",
    author: "J. K. Rowling",
    isbn: "9788498389296",
    category: "Fantasia",
  };
  //interaccion 3
  user.books = [book1, book2]; 
  //interaccion 4
  const library = [];
library.push(user);
//interaccion 5
const book3 = {
    title: "La Rueda del Tiempo nº 01/14 El ojo del mundo:",
    author: "Robert Jordan",
    isbn: "9788445007006",
    category: "Fantasia",
  };
   
  library[0].books.push(book3);

// interaccion EXTRA
for (let i = 0; i < library.length; i++) {
    const libraryUser = library[i].name; 
    console.log(`${libraryUser}'s books:`);
    
    for (let j = 0; j < library[i].books.length; j++) {
      const title = library[i].books[j].title;
      const author = library[i].books[j].author;
      
      console.log(`- ${title}, ${author}`);
    }
  }

