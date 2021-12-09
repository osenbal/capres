/* eslint-disable no-underscore-dangle */
import favoriteRestauran from '../data/favorite-restaurant-idb';
import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurtant = await favoriteRestauran.getRestaurant(id);
    return !!restaurtant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestauran.putRestaurantFavorite(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestauran.deleteRestaurantFavorite(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
