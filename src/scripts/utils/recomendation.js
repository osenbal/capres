import { createRecomendationTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const Recomendation = {
  async init({ recomendationElement, restaurants, restaurant }) {
    this._recomendationElement = recomendationElement;
    this._restaurants = restaurants;
    this._restaurant = restaurant;
    await this.recomendationRestaurant();
  },

  filterByCity() {
    return this._restaurants.filter((item) => item.city === this._restaurant.city);
  },

  async recomendationRestaurant() {
    await this.filterByCity();
    this.filterByCity().forEach((item) => {
      if (item.name !== this._restaurant.name) {
        this._recomendationElement.innerHTML += createRecomendationTemplate(item);
      }
    });
  },
};

export default Recomendation;
