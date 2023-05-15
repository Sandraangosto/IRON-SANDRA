// FETCH 1
// Crear la funcion 
function getTodos () {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            // crear el erro en la respuesta y devolver los datos
            if (!response.ok) {
                throw Erorr ("Failed to get todos data");
            }
            return response.json();
        })
        .catch((err) => {
            //registrar errores en la consola
            console.log(err.message);
        });
    }
// obtener datos de la funcion y registrsarlos en la consola

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });


  // FETCH 2

  function displayData() {
   
    fetch("https://jsonplaceholder.typicode.com/posts")
      // paso dos que responda con JSON
      .then((response) => response.json())
      .then((data) => {
        // PASo 3 CREAR HTML 
        const parentElement = document.getElementById("posts");
        data.forEach((post) => {
          const postEl = document.createElement("div");
          postEl.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
          parentElement.appendChild(postEl);
        });
      })
      .catch((error) => {
        // SI DA ERROR QUE MANDE UN MENSAJE
        console.log("Error: ", error);
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Failed to fetch data";
        document.body.appendChild(errorMessage);
      });
  }
   
  // LLAMAR A LA FUNCION Y EJECUTARLA
  displayData();