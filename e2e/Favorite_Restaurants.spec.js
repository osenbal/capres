/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.see('Ups Nothing favorite restaurant!', '.noFavorite');
});

Scenario('Add favorite one restaurant', async ({ I }) => {
  I.see('Ups Nothing favorite restaurant!', '.noFavorite');

  I.amOnPage('/');

  I.seeElement('.restaurant__item-header a');
  const firstRestaurant = locate('.restaurant__item-header a').first();
  const firstRestaurantName = locate('.restaurant__name').first();
  const textFirstRestaurantName = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(textFirstRestaurantName, favoritedRestaurantName);
});

Scenario('Un Favorite restaurant', async ({ I }) => {
  I.see('Ups Nothing favorite restaurant!', '.noFavorite');

  I.amOnPage('/');

  I.seeElement('.restaurant__item-header a');
  const firstRestaurant = locate('.restaurant__item-header a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item-header a');

  I.click(locate('.restaurant__item-header a').first());

  // Unfavorite restaurant
  I.seeElement('#likeButton');
  I.click('#likeButton');
});
