import favoriteRestauran from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.querySelector('#addToFavorite');
};

describe('Unfavorite Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await favoriteRestauran.putRestaurantFavorite({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestauran.deleteRestaurantFavorite(1);
  });

  it('should display unfavorite button when the restaurant has been favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]'))
      .toBeTruthy();
  });

  it('should not display favorite button when the restaurant has been favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorite restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestauran.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unfavorite restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    await favoriteRestauran.deleteRestaurantFavorite(1);

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestauran.getAllRestaurant()).toEqual([]);
  });
});
