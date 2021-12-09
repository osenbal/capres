import favoriteRestauran from '../../data/favorite-restaurant-idb';
import { createListItemRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="contents">
          <article id="contents__lists-restaurant">
            <div class="list__restaurant-header">
              <h2 tabindex="0" class="content__label">Your Faorite Restaurants</h2>
              <p class="total_restaurant_found">Result </p>
              <div class="empty-favorite" >
                <p class="noFavorite">Ups Nothing favorite restaurant!</p>
                        <img
                          src='/images/assets/jpg/empty-favorite.jpg'
                          alt="Empty favorite restaurant picture"></img>
                <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
              </div>
            </div>
            <div class="restaurant__list">
            </div>
          </article>
        </section>

    `;
  },
  async afterRender() {
    const mainContentElement = document.querySelector('#maincontent');
    mainContentElement.scrollIntoView();
    const restaurants = await favoriteRestauran.getAllRestaurant();

    const restaurantListElemet = document.querySelector('.restaurant__list');
    const totalRestaurantFoundElement = document.querySelector('.total_restaurant_found');
    const imageEmptyRestaurant = document.querySelector('.empty-favorite');
    totalRestaurantFoundElement.innerHTML += `${restaurants.length} Found`;
    if (restaurants.length !== 0) {
      imageEmptyRestaurant.remove();
      restaurants.forEach((item) => {
        restaurantListElemet.innerHTML += createListItemRestaurant(item);
      });
    }
  },
};

export default Favorite;
