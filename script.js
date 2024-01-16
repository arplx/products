const productsContainer = document.getElementById('products-container');

fetch('products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width: 100%;height: 400px;object-fit: cover;object-position: top;display: block;">
      <a class="product-tittle" href="${product.url}" target="_blank" style="padding: 0px;margin: 0px;text-decoration: none;">
          <h2 style="margin: 0px;font-size: 15px;text-align: center;text-decoration: none;color: black;">${product.name}</h2>
        </a>
      <p style="font-size: 11px;font-family: helvetica;padding: 0px;margin: 0px;margin-bottom: 10px;max-height: 97px;overflow: scroll;">${product.description}</p>
      <a class="buy-button" href="${product.url}" target="_blank" style="width: auto;background: black;color: white;">BUY</a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
