// DOM 5

let button = document.getElementById("add-item-button");
let input = document.createElement("input");
 
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter an item");
 
let parent = button.parentNode;
 
parent.insertBefore(input, button);