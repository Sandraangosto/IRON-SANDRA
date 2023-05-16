// ASYNC / AWAIT 1

async function getData() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("data", data);
      } catch (err) {
        console.log("Failed to fetch data", error);
      }
}
console.log(getData("https://jsonplaceholder.typicode.com/posts"));

// ASYNC / AWAIT 2

async function displayData() {
    try {
        const url = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await response.json();

        const parentElement = document.getElementById("posts");
        data.forEach((post) => {
        const postEl = document.createElement("div");
        postEl.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        parentElement.appendChild(postEl);
    });

    } catch (err) {
            console.log("Failed to fetch data", error);

            const errorMessage = document.createElement("p");
            errorMessage.innerText = "Failed to fetch data";
            document.body.appendChild(errorMessage);
    }
}
console.log(displayData);