const productsContainer = document.getElementById('products-container');

fetch('products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width: 100%;height: 55%;object-fit: cover;object-position: top;display: block;">
      <a class="product-tittle" href="${product.url}" target="_blank" style="padding: 0px;margin: 0px;text-decoration: none;">
          <h2 style="margin: 0px;font-size: 15px;text-align: center;text-decoration: none;color: black;">${product.name}</h2>
        </a>
      <p style="font-size: 11px;font-family: helvetica;padding: 0px;margin: 0px;max-height: 97px;overflow: scroll;font-size: 18px;font-weight: 600;text-align: center;margin-top: 5px;margin-bottom: 5px;">${product.price}</p>
      <a <button="" href="${product.url}" type="button" style="height: 45px;padding: 0px;background-color: #000;width: 300px;border-radius: 10px;width: 100%;">
  <img alt="Image description" style="height: 45px;padding: 2;display: flex;width: 100%;object-fit: contain;background: #ff9902;border-radius: 10px;" src="https://www.catchfirecreative.com/wp-content/uploads/2018/02/amazon-on-the-brain-blog.png">
</a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
