import favoriteRestauran from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<li id="addToFavorite"></li>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]'))
      .toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await favoriteRestauran.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    favoriteRestauran.deleteRestaurantFavorite(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    await favoriteRestauran.putRestaurantFavorite({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestauran.getAllRestaurant()).toEqual([{ id: 1 }]);

    favoriteRestauran.deleteRestaurantFavorite(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestauran.getAllRestaurant()).toEqual([]);
  });
});
