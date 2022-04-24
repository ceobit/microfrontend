import faker from 'faker';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    let products = '';

    for (let i = 0; i < 5; i++) {
      products += `
      <div class="product-name">${faker.commerce.productName()}</div> `;
    }

    const title = 'products';
    this.innerHTML = `${products}
      `;
  }
}
customElements.define('microfrontend-root', AppElement);
