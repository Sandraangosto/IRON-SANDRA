const h1 = document.querySelector("h1");
h1.textContent = "Cat";

const mice = document.querySelectorAll(".mouse");
for (let mouse of mice) {
    mouse.style.backgroundColor = "gray";
}

const newP = document.createElement("p");
newP.textContent = "Hello from the DOM";
const cat = document.querySelector("#cat");
cat.appendChild(newP);