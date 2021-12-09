/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/scss/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';

// Component
import './views/components/menuju-konten';
import './views/components/logo';
import './views/components/my-hamburger-menu';
import './views/components/my-navbar';
import './views/components/hero';
import './views/components/why-us';
import './views/components/my-footer';

const app = new App({
  button: document.querySelector('#hamburger__button'),
  drawer: document.querySelector('#navbar'),
  mainContent: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
