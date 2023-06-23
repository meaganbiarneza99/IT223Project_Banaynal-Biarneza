var deliver = document.getElementById('checkout-button');
deliver.addEventListener('click', function() {
    window.location.href = 'Register.html';
})

var showCartButton = document.getElementById('cart-img');
var cartoverlay = document.getElementById('cart-overlay');

showCartButton.addEventListener('click', function() {
  cartoverlay.style.display = 'block';
});

cartoverlay.addEventListener('click', function(event) {
  if (event.target === cartoverlay) {
    cartoverlay.style.display = 'none';
  }
});


// Initialize the counter variable
var cartItemCount = 0;
var totalPrice = 0;

function addToCart(itemName, itemPrice, itemImage) {
    // Increment the counter
    cartItemCount++;

    // Create the cart item element
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-items';

    // Calculate the total price
    totalPrice += parseFloat(itemPrice);

    // Create the close button
    var closeButton = document.createElement('span');
    closeButton.className = 'fas fa-times';
    closeButton.addEventListener('click', function() {
        // Decrement the counter when the cart item is removed
        cartItemCount--;
        // Subtract the item price from the total price
        totalPrice -= parseFloat(itemPrice);
        cartItem.remove();
        updateCartCounter(); // Update the counter after removing an item
        updateTotalPrice(); // Update the total price after removing an item
        });
    cartItem.appendChild(closeButton);

    // Create the image element
    var image = document.createElement('img');
    image.src = itemImage;
    cartItem.appendChild(image);

    // Create the content element
    var content = document.createElement('div');
    content.className = 'content';

    // Create the item name element
    var itemNameElement = document.createElement('h3');
    itemNameElement.textContent = itemName;
    content.appendChild(itemNameElement);

    // Create the item price element
    var itemPriceElement = document.createElement('div');
    itemPriceElement.className = 'price';
    itemPriceElement.textContent = itemPrice;
    content.appendChild(itemPriceElement);

    // Append the content element to the cart item
    cartItem.appendChild(content);

    // Append the cart item to the cart container
    var cartContainer = document.querySelector('.product-cart');
    cartContainer.appendChild(cartItem);

    // Update the counter display
    updateCartCounter();
    // Update the total price display
    updateTotalPrice();
}

function updateCartCounter() {
    var counterElement = document.getElementById('cart-counter');
    if (cartItemCount > 0) {
        counterElement.textContent = cartItemCount;
        counterElement.style.display = 'block'; // Show the counter
    } else {
        counterElement.style.display = 'none'; // Hide the counter
    }
}

function updateTotalPrice() {
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = 'Total: ₱' + totalPrice.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-button');

    // Add a click event listener to the button
    checkoutBtn.addEventListener('click', function() {
        // Change the button text to "Checked Out"
        checkoutBtn.textContent = 'Checked Out';

        // Clear the cart by removing all cart items
        const cartItems = document.querySelectorAll('.cart-items');
        cartItems.forEach(item => item.remove());

        // Reset the counter
        cartItemCount = 0;
        totalPrice = 0;
        updateCartCounter();
        updateTotalPrice();
    });
});

let cartItems = document.querySelector(".product-cart");
document.querySelector("#checkout-button").onclick = () => {
	cartItems.classList.toggle("active");
};