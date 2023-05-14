// ITERATION 1
// PASO 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input')

  //console.log('Calculating subtotal, yey!');

  // PASO 2 
let priceValue = parseFloat(price.innerText);
let quantityValue = quantity.value;

//console.log(priceValue);
//console.log(quantityValue);
// PASO 3 

let subTotalValue = priceValue * quantityValue;

//console.log(subTotalValue);

// PASO 4

let subtotal = product.querySelector('.subtotal span');

// PASO 5

subtotal.innerText = subTotalValue;

return subTotalValue;

};

  // ITERATION 2
  //... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  let products = document.getElementsByClassName("product");

  // declaramos una variable con valor por defectro 0.

  let totalValue = 0;

  //sumar el valor que nos va a dar la funcion totalValue y updateSubtotal

    // ITERATION 3
  //... your code goes here

  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  document.querySelector('#total-value span').innerText = totalValue;
  }

  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/


  // end of test







// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let row = target.parentNode.parentNode;
  let parent = row.parentNode;

  parent.removeChild(row);

  calculateAll();

}

// ITERATION 5

function createProduct() {
  
  let createProduct = document.querySelector('.create-product');
  let newProductName = createProduct.querySelector('input');
  let newProductNameValue = newProductName.value;
  let newProductPrice = createProduct.querySelector('input[type="number"]');
  let newProductPriceValue = Number(newProductPrice.value).toFixed(2);

 // creacion de nuevo producto

 let newTableRow = document.createElement('tr');
 newTableRow.className = 'product';
 newTableRow.innerHTML = ` 
  <td class="name">
    <span>${newProductNameValue}</span>
  </td>
  <td class="price">$<span>${newProductPriceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
</td>
 `
let parent = document.querySelector("#cart tbody");
parent.appendChild(newTableRow);

// es para  uw funciuone el boton eliminar del nuevo producto 
let btnRemove = newTableRow.querySelector('.btn-remove');
btnRemove.addEventListener('click', removeProduct);

// para limpiar el codigo

newProductName.value = '';
newProductPrice.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let productsRemoveBtn = document.getElementsByClassName("btn-remove");
  
  for ( removeBtn of productsRemoveBtn) {
    removeBtn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  
});
