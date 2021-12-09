/* eslint-disable max-len */
import { createCustomerReview } from '../views/templates/template-creator';
import AddReview from '../data/add-review';

const addReviewInitiator = {
  async init({
    addElementButtonReview, formAddReviewElement, customerReviewContentElement, newReview,
  }) {
    this._addElementButtonReview = addElementButtonReview;
    this._formAddReviewElement = formAddReviewElement;
    this._customerReviewContentElement = customerReviewContentElement;
    this._newReview = newReview;
    await this.addReviewRestaurant();
  },

  async addReviewRestaurant() {
    this._addElementButtonReview.addEventListener('click', async (event) => {
      event.preventDefault();

      if (this._newReview.name.value !== '' && this._newReview.review.value !== '' && window.navigator.onLine === true) {
        this._customerReviewContentElement.innerHTML += createCustomerReview({ id: this._newReview.id, name: this._newReview.name.value, review: this._newReview.review.value }, await this.dateReview());
        await this.postReview();
        this._formAddReviewElement.reset();
      } else {
        // eslint-disable-next-line no-alert
        alert('Name and Review can not empty, and you must online');
      }
    });
  },

  async dateReview() {
    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dateObj = await new Date();
    const tanggal = dateObj.getDate();
    const bulan = dateObj.getMonth();
    const tahun = dateObj.getFullYear();

    const getNowDate = {
      date: `${tanggal} ${namaBulan[bulan]} ${tahun}`,
    };
    return getNowDate;
  },

  async postReview() {
    AddReview.postReview(this._newReview);
  },
};

export default addReviewInitiator;
