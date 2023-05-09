const shoppingList = document.querySelector('.shopping-list');
const listItems = shoppingList.querySelectorAll('li');
 
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});


