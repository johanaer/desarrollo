function addToCart(pizzaName) {
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = pizzaName;
    cartItems.appendChild(newItem);
}
