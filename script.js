// Select DOM elements
const sortSelect = document.getElementById('sortSelect'); // Sort dropdown
const filterPriceCheckbox = document.getElementById('filterPriceCheckbox'); // Price filter checkbox
const filterNewCheckbox = document.getElementById('filterNewCheckbox'); // New arrivals filter checkbox
const productGrid = document.getElementById('productGrid'); // Product grid container


const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1. High-quality item.', price: 25.99, image: 'assets/images/product1.png', isNew: true },
  { id: 2, name: 'Product 2', description: 'Description for product 2. High-quality item.', price: 45.00, image: 'assets/images/product2.png', isNew: false },
  { id: 3, name: 'Product 3', description: 'Description for product 3. High-quality item.', price: 30.50, image: 'assets/images/product3.png', isNew: true },
  // { id: 4, name: 'Product 4', description: 'Description for product 4. High-quality item.', price: 15.00, image: 'assets/images/product4.png', isNew: false },
  // { id: 5, name: 'Product 5', description: 'Description for product 5. High-quality item.', price: 100.00, image: 'assets/images/product5.png', isNew: true },
  // { id: 6, name: 'Product 6', description: 'Description for product 6. High-quality item.', price: 75.20, image: 'assets/images/product6.png', isNew: false },
  { id: 4, name: 'Product 4', description: 'Description for product 4. High-quality item.', price: 55.00, image: 'assets/images/product7.png', isNew: true },
  { id: 5, name: 'Product 5', description: 'Description for product 5. High-quality item.', price: 77.99, image: 'assets/images/product20.png', isNew: false },
  // { id: 8, name: 'Product 8', description: 'Description for product 8. High-quality item.', price: 22.49, image: 'assets/images/product8.png', isNew: false },
  // { id: 18, name: 'Product 18', description: 'Description for product 18. High-quality item.', price: 45.49, image: 'assets/images/product18.png', isNew: false },
  // { id: 9, name: 'Product 9', description: 'Description for product 9. High-quality item.', price: 60.00, image: 'assets/images/product9.png', isNew: true },
  // { id: 11, name: 'Product 11', description: 'Description for product 11. High-quality item.', price: 19.99, image: 'assets/images/product11.png', isNew: true },
  // { id: 12, name: 'Product 12', description: 'Description for product 12. High-quality item.', price: 120.50, image: 'assets/images/product12.png', isNew: false },
  // { id: 13, name: 'Product 13', description: 'Description for product 13. High-quality item.', price: 47.75, image: 'assets/images/product13.png', isNew: true },
  // { id: 14, name: 'Product 14', description: 'Description for product 14. High-quality item.', price: 65.99, image: 'assets/images/product14.png', isNew: false },
  { id: 6, name: 'Product 6', description: 'Description for product 6. High-quality item.', price: 36.00, image: 'assets/images/product33.png', isNew: true },
  { id: 7, name: 'Product 7', description: 'Description for product 7. High-quality item.', price: 39.49, image: 'assets/images/product15.png', isNew: true },
  { id: 8, name: 'Product 8', description: 'Description for product 8. High-quality item.', price: 50.00, image: 'assets/images/product16.png', isNew: false },
  // { id: 17, name: 'Product 17', description: 'Description for product 17. High-quality item.', price: 88.99, image: 'assets/images/product17.png', isNew: true },
  { id: 9, name: 'Product 9', description: 'Description for product 9. High-quality item.', price: 18.75, image: 'assets/images/product24.png', isNew: false },
  // { id: 19, name: 'Product 19', description: 'Description for product 19. High-quality item.', price: 90.00, image: 'assets/images/product19.png', isNew: true },
  { id: 10, name: 'Product 10', description: 'Description for product 10. High-quality item.', price: 72.45, image: 'assets/images/product28.png', isNew: false },
  { id: 11, name: 'Product 11', description: 'Description for product 11. High-quality item.', price: 27.50, image: 'assets/images/product21.png', isNew: true },
  // { id: 22, name: 'Product 22', description: 'Description for product 22. High-quality item.', price: 99.00, image: 'assets/images/product22.png', isNew: false },
  // { id: 23, name: 'Product 23', description: 'Description for product 23. High-quality item.', price: 46.00, image: 'assets/images/product23.png', isNew: true },
 
  // { id: 25, name: 'Product 25', description: 'Description for product 25. High-quality item.', price: 53.30, image: 'assets/images/product25.png', isNew: true },
  // { id: 26, name: 'Product 26', description: 'Description for product 26. High-quality item.', price: 69.00, image: 'assets/images/product26.png', isNew: false },
  // { id: 27, name: 'Product 27', description: 'Description for product 27. High-quality item.', price: 59.99, image: 'assets/images/product27.png', isNew: true },
  
  // { id: 29, name: 'Product 29', description: 'Description for product 29. High-quality item.', price: 49.99, image: 'assets/images/product29.png', isNew: true },
  // { id: 30, name: 'Product 30', description: 'Description for product 30. High-quality item.', price: 26.50, image: 'assets/images/product30.png', isNew: false },
  { id: 12, name: 'Product 12', description: 'Description for product 31. High-quality item.', price: 61.75, image: 'assets/images/product31.png', isNew: true },
  { id: 13, name: 'Product 13', description: 'Description for product 32. High-quality item.', price: 80.00, image: 'assets/images/product32.png', isNew: false },
  { id: 14, name: 'Product 14', description: 'Description for product 10. High-quality item.', price: 34.99, image: 'assets/images/product10.png', isNew: false },
  { id: 15, name: 'Product 15', description: 'Description for product 35. High-quality item.', price: 89.99, image: 'assets/images/product35.png', isNew: true },
  { id: 16, name: 'Product 16', description: 'Description for product 38. High-quality item.', price: 33.99, image: 'assets/images/product38.png', isNew: false },
  // { id: 36, name: 'Product 36', description: 'Description for product 36. High-quality item.', price: 42.00, image: 'assets/images/product36.png', isNew: false },
  // { id: 37, name: 'Product 37', description: 'Description for product 37. High-quality item.', price: 75.50, image: 'assets/images/product37.png', isNew: true },
  
  // { id: 39, name: 'Product 39', description: 'Description for product 39. High-quality item.', price: 20.50, image: 'assets/images/product39.png', isNew: true },
  // { id: 40, name: 'Product 40', description: 'Description for product 40. High-quality item.', price: 105.75, image: 'assets/images/product40.png', isNew: false }
];

// Array to hold cart items
const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart from localStorage or initialize empty

// Function to display products in the main product grid
function displayProducts(productsToDisplay) {
  productGrid.innerHTML = ''; // Clear the grid
  productsToDisplay.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('col-6', 'col-md-3'); // 4 columns on medium screens, 2 on small screens

    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-price">₹${product.price.toFixed(2)}</p>
        </div>
        <button class="buy-now" onclick="addToCart(${product.id})">Add To Kart</button>
      </div>
    `;

    productGrid.appendChild(card); // Add card to grid
  });
}

// Function to display cart items dynamically in a flexbox layout
function displayCart() {
  const cartContainer = document.getElementById('cartContainer');
  cartContainer.innerHTML = ''; // Clear previous cart items

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    return;
  }

  cart.forEach(product => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item'); // Add flexbox design styling

    cartItem.innerHTML = `
      <div class="cart-card">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-card-body">
          <h5>${product.name}</h5>
          <p>Price: ₹${product.price.toFixed(2)}</p>
          <p>${product.description}</p>
        </div>
      </div>
    `;

    cartContainer.appendChild(cartItem); // Add the cart item to the container
  });
}

// Function to add products to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!cart.includes(product)) {
    cart.push(product); // Add the product to the cart if not already added
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    displayCart(); // Update the cart display
  }
  alert(`${product.name} added to your cart!`);
}

// Function to apply filters and sorting
function applyFiltersAndSort() {
  let filteredProducts = [...products]; // Copy the products array

  // Apply filters
  if (filterPriceCheckbox.checked) {
    filteredProducts = filteredProducts.filter(product => product.price < 50);
  }
  if (filterNewCheckbox.checked) {
    filteredProducts = filteredProducts.filter(product => product.isNew);
  }

  // Apply sorting
  const sortOption = sortSelect.value;
  if (sortOption === 'priceLow') {
    filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // Low to high
  } else if (sortOption === 'priceHigh') {
    filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); // High to low
  } else if (sortOption === 'newest') {
    filteredProducts.sort((a, b) => b.id - a.id); // Newest first
  }

  displayProducts(filteredProducts); // Display the filtered and sorted products
}

// Initial display of products
applyFiltersAndSort();

// Display cart items on page load
displayCart();

// Event listeners for filters and sort dropdown
sortSelect.addEventListener('change', applyFiltersAndSort);
filterPriceCheckbox.addEventListener('change', applyFiltersAndSort);
filterNewCheckbox.addEventListener('change', applyFiltersAndSort);
