/* eslint-disable no-underscore-dangle */
class MenujuKontent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#maincontent" class="skip_link">Menuju ke konten</a>
    `;
  }
}

customElements.define('menuju-konten', MenujuKontent);
