/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';

const AddReview = {
  async postReview(newReview) {
    this._newReview = newReview;

    const response = await fetch(CONFIG.POST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: this._newReview.id, name: this._newReview.name.value, review: this._newReview.review.value }),
    });
    return response;
  },
};

export default AddReview;
