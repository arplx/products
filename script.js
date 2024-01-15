const productsContainer = document.getElementById('products-container');

fetch('products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <a class="buy-button" href="https://www.amazon.com/dp/${product.asin}" target="_blank">Buy on Amazon</a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
