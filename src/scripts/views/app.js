/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    button, drawer, mainContent,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._mainContent = mainContent;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._mainContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    console.log(url);
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
