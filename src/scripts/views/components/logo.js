/* eslint-disable no-underscore-dangle */
class MyLogo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="logo__brand">
        <img src="./images/assets/Logo-capres2.svg" alt="Logo capres" /><span>CAPRES</span>
      </div>
    `;
  }
}

customElements.define('my-logo', MyLogo);
