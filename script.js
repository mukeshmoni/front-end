const getRandomImage = () => `assets/images/product${Math.floor(Math.random() * 40) + 1}.png`;

const products = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: `Description for product ${index + 1}. High-quality item.`,
  price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
  image: getRandomImage(),
  isNew: Math.random() > 0.5
}));

const productGrid = document.getElementById('productGrid');
const sortSelect = document.getElementById('sort');
const filterPriceCheckbox = document.getElementById('filterPrice');
const filterNewCheckbox = document.getElementById('filterNew');

function displayProducts(productsToDisplay) {
  productGrid.innerHTML = '';
  productsToDisplay.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('col-6', 'col-md-3'); // 4 columns on medium screens, 2 on small screens

    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-price">$${product.price.toFixed(2)}</p>
        </div>
        <button class="buy-now">Buy Now</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function applyFiltersAndSort() {
  let filteredProducts = [...products];

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
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHigh') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'newest') {
    filteredProducts.sort((a, b) => b.id - a.id);
  }

  displayProducts(filteredProducts);
}

// Initial display of products
displayProducts(products);

// Event listeners for filters and sort
sortSelect.addEventListener('change', applyFiltersAndSort);
filterPriceCheckbox.addEventListener('change', applyFiltersAndSort);
filterNewCheckbox.addEventListener('change', applyFiltersAndSort);
