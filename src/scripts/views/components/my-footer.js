/* eslint-disable no-underscore-dangle */
class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="wave__svg" src="./images/assets/wave.svg" alt="wave svg">

    <footer>
      <section class="footer_section">
        <div class="section-1">
          <h3>Sitemap</h3>
          <ul class="list__sitemap">
            <li class="item__sitemap"><a href="/#">Beranda</a></li>
            <li class="item__sitemap"><a href="/#/favorite">Favorite</a></li>
            <li class="item__sitemap"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/iqbal-maulana1703/">About</a></li>
          </ul>
        </div>
        <div class="section-2">
          <h3>Contact</h3>
          <div class="social_media">
            <div>
              <a aria-label="Contact Instagram" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/iqbal_mln17/"><img src="./images/assets/instagram.png" /></a>
            </div>
            <div>
              <a aria-label="Contact facebook"  rel="noopener noreferrer" target="_blank" href="https://www.facebook.com"><img src="./images/assets/facebook.png" /></a>
            </div>
            <div>
              <a aria-label="Contact twitter"  rel="noopener noreferrer" target="_blank" href="https://twitter.com"><img src="./images/assets/twitter.png" /></a>
            </div>
          </div>
        </div>
        <div class="section-3">
          <h3 tabindex="0">CaPres</h3>
          <p tabindex="0">CaPres atau Cari Pilihan Restaurant adalah web application untuk mencari informasi-informasi
            restorant yang keren dan sudah direcomendedkan oleh kami dan orang-orang.</p>
          <p tabindex="0">Copyright ©2021 - CaPres</p>
        </div>
      </section>
    </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);
