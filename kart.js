// Load cart items from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    cartItemsDiv.innerHTML = '';
    cart.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        cartItemsDiv.appendChild(item);
    });
}

function goBack() {
    window.location.href = 'index.html'; // Navigate back to the main page
}

// Call the displayCartItems function when the page loads
window.onload = displayCartItems;
