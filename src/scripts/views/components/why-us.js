/* eslint-disable no-underscore-dangle */
class WhyUs extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container_content_plus">
        <div class="content_plus">
          <div class="list_content_plus">
            <h2 tabindex="0">Why Chose CaPres ?</h2>
            <ul>
              <li tabindex="0">➤ Pilihan lebih banyak</li>
              <li tabindex="0">➤ Terpilih restaurant yang sehat</li>
              <li tabindex="0">➤ Terdapat list menu di dalamnya</li>
            </ul>
          </div>
          <figure>
            <img src="./images/assets/why-us.svg" alt="why us image">

            <figcaption><a tabindex="0" href="http://www.freepik.com">Designed by slidesgo / Freepik</a></figcaption>
          </figure>
        </div>
      </div>
    `;
  }
}

customElements.define('why-us', WhyUs);
