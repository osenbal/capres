/* eslint-disable no-underscore-dangle */
class MyHamburgerMenu extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hamburger__menu">
      <button id="hamburger__button" aria-label="navigation-menu" href="#">☰</button>
    </div>
    `;
  }
}

customElements.define('my-hamburger', MyHamburgerMenu);
