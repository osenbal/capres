/* eslint-disable no-underscore-dangle */
class MyHero extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <picture>
          <div class="background-filter-hero"></div>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg" alt="hero image">
          <img src="./images/heros/hero-image_4-large.jpg" alt="hero image">
        </picture>
        <div class="hero__content">
          <img class="logo-hero" src="./images/assets/Logo-capres2.svg" />
          <div class="text__content-hero">
            <h1>CARI PILIHAN RESTORAN...</h1>
            <p>Ayo Cari Pilihan Restaurant Mu</p>
          </div>
        </div>
        <div class="location__slide">
            <img type="image/png" src="./images/assets/place.png" alt="Map Icon" />
          <span>Find Your Favorite Restaurant... ➤</span>
        </div>
      </section>
    `;
  }
}

customElements.define('my-hero', MyHero);
