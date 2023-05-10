// index.js

let paragraph = document.getElementById("paragraph");

console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName("link");
 
console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection

let divs = document.getElementsByTagName("div");
 
console.log(divs);

let h2Tag = document.createElement("h2");
console.log(h2Tag);
h2Tag.innerHTML = "Elephant";

let parent = document.getElementsByTagName("body")[0];
parent.appendChild(h2Tag);

let text = document.createTextNode("This text is created dynamically  ");
 
parent.appendChild(text);

let h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
parent.insertBefore(h1Tag, h2Tag);

let theParagraph = document.getElementById("paragraph");
parent.removeChild(theParagraph);

let button = document.getElementById("add-item-button");
 
button.onclick = function () {
  console.log("adding an element to the list");
};

let input = document.getElementsByTagName("input")[0];
console.log(input.value);

let sendButton = document.getElementById("send-btn");
// move the input inside the function (this step is optional):
sendButton.onclick = function () {
  let input = document.getElementsByTagName("input")[0]; // or leave it as it is, outside
  console.log(input.value);
};
