/* eslint-disable import/named */
import RestaurantDataSource from '../../data/restauranDataSource';
import { createListItemRestaurant } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    const mainContentElement = document.querySelector('#maincontent');
    mainContentElement.scrollIntoView();
    return `
    <my-hero></my-hero>
    <section class="contents">
      <article id="contents__lists-restaurant">
        <div class="list__restaurant-header">
          <h2 tabindex="0" class="content__label">Find Your Restaurants</h2>
          <p class="total_restaurant_found">Result </p>
        </div>
        <div class="restaurant__list">
            <div class="restaurant__item skeleton">
            </div>
            <div class="restaurant__item skeleton">
            </div>
            <div class="restaurant__item skeleton">
            </div>
            <div class="restaurant__item skeleton">
            </div>
            <div class="restaurant__item skeleton">
            </div>
            <div class="restaurant__item skeleton">
            </div>
        </div>
      </article>
      <why-us></why-us>
    </section>

    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataSource.getListRestaurant();
    const restaurantListElement = document.querySelector('.restaurant__list');
    const totalRestaurantFoundElement = document.querySelector('.total_restaurant_found');
    totalRestaurantFoundElement.innerHTML += `${restaurants.length} Found`;

    restaurantListElement.innerHTML = '';
    restaurants.forEach((item) => {
      restaurantListElement.innerHTML += createListItemRestaurant(item);
    });
  },

};

export default ListRestaurant;
