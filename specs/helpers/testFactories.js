import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';

const createFavoriteButtonPresenterRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#addToFavorite'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterRestaurant };
