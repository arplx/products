const productsContainer = document.getElementById('products-container');

fetch('products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <a href="${product.url}" target="_blank">
          <h2>${product.name}</h2>
        </a>
        <p>${product.description}</p>
        <img src="${product.image}" alt="${product.name}" />
        <a class="buy-button" href="${product.url}" target="_blank">Buy on Amazon</a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
