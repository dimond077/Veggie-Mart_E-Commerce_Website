const removeButtons = document.querySelectorAll(".remove-product");


removeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    
    const productDiv = event.target.parentNode.parentNode;
    productDiv.parentNode.removeChild(productDiv);
    
    updateTotal();
  });
});


const quantityInputs = document.querySelectorAll(".product-quantity input");


quantityInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    
    const productDiv = event.target.parentNode.parentNode;
    const price = parseFloat(productDiv.querySelector(".product-price").innerText.replace("₹ ", ""));
    const quantity = parseInt(event.target.value);
    const linePrice = price * quantity;
    productDiv.querySelector(".product-line-price").innerText = "₹ " + linePrice.toFixed(2);
    
    updateTotal();
  });
});

function updateQuantity(event) {
  const input = event.target;
  const productLine = input.closest(".product-line");
  const priceElement = productLine.querySelector(".product-line-price");
  const price = parseFloat(priceElement.innerText.replace("₹ ", ""));
  const quantity = parseInt(input.value);
  const lineTotal = price * quantity;


  priceElement.innerText = "₹ " + lineTotal.toFixed(2);


  updateTotal();
}

quantityInputs.forEach((input) => {
  input.addEventListener('change', updateCartTotals);
});


function updateCartTotals() {
  let subtotal = 0;



  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    const priceElement = product.querySelector('.product-price');
    const quantityElement = product.querySelector('.product-quantity input');
    const lineTotalElement = product.querySelector('.product-line-price');
  })

const price = parseFloat(priceElement.innerText.replace('₹ ', ''));

}


function updateQuantity(event) {
  const input = event.target;
  const productLine = input.closest(".product-line");
  const priceElement = productLine.querySelector(".product-line-price");
  const price = parseFloat(priceElement.innerText.replace("₹ ", ""));
  const quantity = parseInt(input.value);
  const lineTotal = price * quantity;



  priceElement.innerText = "₹ " + lineTotal.toFixed(2);



  updateTotal();
}


function updateTotal() {
  const cartItemContainer = document.querySelector(".fruit-vegitable");
  const cartRows = cartItemContainer.querySelectorAll(".product");


  let subtotal = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.querySelector(".product-price");
    const quantityElement = cartRow.querySelector(".product-quantity input");
    const price = parseFloat(priceElement.innerText.replace("₹ ", ""));
    const quantity = parseInt(quantityElement.value);
    const lineTotal = price * quantity;
    const linePriceElement = cartRow.querySelector(".product-line-price");
    linePriceElement.innerText = "₹ " + lineTotal.toFixed(2);
    subtotal += lineTotal;
  }


  const taxRate = 0.18;
  const tax = subtotal * taxRate;
  const shipping = 150;
  const total = subtotal + tax + shipping;


  document.getElementById("cart-subtotal").innerText = "₹ " + subtotal.toFixed(2);
  document.getElementById("cart-tax").innerText = "₹ " + tax.toFixed(2);
  document.getElementById("cart-shipping").innerText = "₹ " + shipping.toFixed(2);
  document.getElementById("cart-total").innerText = "₹ " + total.toFixed(2);
}
