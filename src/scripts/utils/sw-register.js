import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');
    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        window.location.reload();
      }
    });
    wb.register();
  }
};

export default swRegister;
