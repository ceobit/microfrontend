import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  products += `
      <div class="product-name">${faker.commerce.productName()}</div> `;
}

document.getElementById('products_list').innerHTML = `${products}
`;
