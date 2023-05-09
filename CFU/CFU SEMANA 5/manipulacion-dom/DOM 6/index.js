const addItemButton = document.querySelector("#add-item-button");
const itemsList = document.querySelector("#items-list");

let itemNumber = 1;

addItemButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item number ${itemNumber}`;
    temsList.appendChild(newItem);
    itemNumber++;
});