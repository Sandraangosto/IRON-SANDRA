const box = document.getElementsByClassName("box");

for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "purple";
}

const paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "20px";
}

const h2 = document.createElement("h2");
 
h2.innerText = "Hello World";
document.body.appendChild(h2);