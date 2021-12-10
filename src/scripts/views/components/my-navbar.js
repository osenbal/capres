/* eslint-disable no-underscore-dangle */
class MyNavbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="navbar" class="header__navbar">
      <ul>
        <li class="nav__item"><a href="./#">Home</a></li>
        <li class="nav__item"><a href="/#/favorite">Favorite</a></li>
        <li class="nav__item"><a rel="noopener noreferrer" target="_blank"
            href="https://www.linkedin.com/in/iqbal-maulana1703/">About</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('my-navbar', MyNavbar);
