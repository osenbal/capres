/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import RestaurantDataSource from '../../data/restauranDataSource';
import {
  createCategoriesRestaurant, createCustomerReview, createDetailItemRestaurant, createDrinksList, createErrorPage, createFoodsList,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import Recomendation from '../../utils/recomendation';
import addReviewInitiator from '../../utils/add-review-presenter';

const Detail = {
  async render() {
    const mainContentElement = document.querySelector('#maincontent');
    mainContentElement.scrollIntoView();
    return `
      <div class="detail__item-restaurant">
        <div class="loader"></div>
      </div>
    `;
  },

  async afterRender() {
    const detailItemElement = document.querySelector('.detail__item-restaurant');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurantResponse = await RestaurantDataSource.getDetailRestaurant(url.id);
      const restaurants = await RestaurantDataSource.getListRestaurant();

      detailItemElement.innerHTML = await createDetailItemRestaurant(restaurantResponse.restaurant);
      //  Like Button Command
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#addToFavorite'),
        restaurant: {
          id: restaurantResponse.restaurant.id,
          name: restaurantResponse.restaurant.name,
          description: restaurantResponse.restaurant.description,
          city: restaurantResponse.restaurant.city,
          rating: restaurantResponse.restaurant.rating,
          pictureId: restaurantResponse.restaurant.pictureId,
        },
      });

      // Recomendation System
      Recomendation.init({
        recomendationElement: document.querySelector('.detail__recomendations'),
        restaurants,
        restaurant: restaurantResponse.restaurant,
      });

      // Render menu restaurant (drinks and foods)
      const detailCategory = document.querySelector('.detail__category');
      const foodListElement = document.querySelector('.food-list');
      const drinkListElement = document.querySelector('.drink-list');
      const customerReviewsElement = document.querySelector(
        '.detail__review-content',
      );
      const detailNavLinkElement = document.getElementsByClassName('detail__nav-link');

      detailNavLinkElement[0].addEventListener('click', () => {
        const reviewsElement = document.getElementById('overview').offsetTop;
        window.scrollTo({
          top: reviewsElement - 20,
          behavior: 'smooth',
        });
      });
      detailNavLinkElement[1].addEventListener('click', () => {
        const reviewsElement = document.getElementById('menus').offsetTop;
        window.scrollTo({
          top: reviewsElement - 20,
          behavior: 'smooth',
        });
      });
      detailNavLinkElement[2].addEventListener('click', () => {
        const reviewsElement = document.getElementById('reviews').offsetTop;
        window.scrollTo({
          top: reviewsElement - 20,
          behavior: 'smooth',
        });
      });

      restaurantResponse.restaurant.categories.forEach((category) => {
        detailCategory.innerHTML += createCategoriesRestaurant(category);
      });

      restaurantResponse.restaurant.menus.foods.forEach((food) => {
        foodListElement.innerHTML += createFoodsList(food);
      });

      restaurantResponse.restaurant.menus.drinks.forEach((drink) => {
        drinkListElement.innerHTML += createDrinksList(drink);
      });

      // Render Customer Review
      restaurantResponse.restaurant.customerReviews.forEach((review) => {
        customerReviewsElement.innerHTML += createCustomerReview(review);
      });

      const newReview = {
        id: `${restaurantResponse.restaurant.id}`,
        name: document.querySelector('.input-nama'),
        review: document.querySelector('.input-review'),
      };
      addReviewInitiator.init({
        addElementButtonReview: document.querySelector('.btn__add-review'),
        formAddReviewElement: document.querySelector('#formAddReview'),
        customerReviewContentElement: customerReviewsElement,
        newReview,
      });
    } catch (error) {
      detailItemElement.innerHTML = await createErrorPage();
    }
  },

};

export default Detail;
