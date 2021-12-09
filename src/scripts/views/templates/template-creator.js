/* eslint-disable arrow-body-style */
import CONFIG from '../../globals/config';

const createListItemRestaurant = (restaurant) => {
  return `
  <div class="restaurant__item">
    <div class="restaurant__item-header">
        <a aria-label="${restaurant.name}" class="link_to_detail" href="${`/#/detail/${restaurant.id}`}">
          <img class="lazyload restaurant__item-header-poster" alt="${restaurant.name}"
              data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        </a>

        <div class="restaurant__item-header-city">
            <p><span class="restaurant__item-header-city-content">${restaurant.city}</span></p>
        </div>
        <div class="restaurant__item-header-rating">
            <p><img src="./images/assets/star.png" /><span class="restaurant__item-header-rating-score"> ${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant__item-content">
        <h3 class="restaurant__name">${restaurant.name}</h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;
};

const createDetailItemRestaurant = (restaurant) => {
  return `
    <div class="detail__cover">
    <div class="image-poster">
      <img class="lazyload skeleton-detail image-poster_background" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="poster ${restaurant.name}">
    </div>

    <div class="detail__title">
      <div class="detail__title-image">
          <img class="lazyload  skeleton-detail" tabindex="0" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Picture ${restaurant.name}">
      </div>
      <div class="detail__title-content">
        <h2 tabindex="0">${restaurant.name}</h2>
        <p tabindex="0" aria-label="rating restaurant"><img src="./images/assets/star.png" /><span class="detail__rating"> ${restaurant.rating}</span></p>
        <p tabindex="0"><img src="./images/assets/place.png" /> <span>${restaurant.address}, <span>${restaurant.city}</span></span></p>
        <div class="detail__category">
        </div>

      </div>
    </div>
  </div>

  <div class="detail__navigation">
      <ul>
        <li tabindex="0"><a class="detail__nav-link">Overview</a></li>
        <li tabindex="0"><a class="detail__nav-link">Menus</a></li>
        <li tabindex="0"><a class="detail__nav-link">Review</a></li>
        <li id="addToFavorite">  </li>
      </ul>
  </div>

  <div class="detail__main-content">
    <section class="detail__contents">
      <div class="detail__container">
        <div class="detail__descriptions">
          <h3 id="overview" tabindex="0">Overview</h3>
          <p tabindex="0">${restaurant.description}</p>
        </div>

        <div class="detail__menus-container">
          <h3  id="menus" tabindex="0">Menus</h3>
          <div class="detail__menus">
            <div class="detail__lists-food">
              <h4 tabindex="0" >Makanan</h4>
              <ul class="menu-list food-list">

              </ul>
            </div>
            <div class="detail__lists-drink">
              <h4 tabindex="0" >Minuman</h4>
              <ul class="menu-list drink-list">

              </ul>
            </div>
          </div>
        </div>

        <div class="detail__review">
          <h3 id="reviews" tabindex="0">Review</h3>

          <div class="detail__review-header">
            <p tabindex="0" class="detail__review-header-rating">Rating ${restaurant.rating}</p>
            <p tabindex="0">${restaurant.customerReviews.length} Ulasan</p>
          </div>

          <div class="detail__review-content">

          </div>
        </div>

        <div class="add-review">
          <h3 tabindex="0">Tambahkan Review Mu!</h3>
          <form id="formAddReview">
            <div class="box-review">
              <input class="input-nama" placeholder="Nama" type="text" name="name" required>
              <textarea class="input-review" placeholder="Tulis Reviewmu di kolom ini"  name="review" cols="30" rows="10" required></textarea>
            </div>
            <button type="submit" class="btn__add-review">+ Add Review</button>
            </form>
        </div>
      </div>

      <aside class="detail__recomendations">
        <h3 tabindex="0">Recomendations</h3>

      </aside>
    </section>

  </div>
  `;
};
const createRecomendationTemplate = (recomendation) => {
  return `
      <a aria-label="Recomendation link ${recomendation.name}" href="${`/#/detail/${recomendation.id}`}">
        <div class="recomendation__item">
          <img class="lazyload" tabindex="0" data-src="${recomendation.pictureId ? CONFIG.BASE_IMAGE_SMALL_URL + recomendation.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="picture restaurant ${recomendation.name}">
          <div class="recomendation__item-content">
            <h4 tabindex="0">${recomendation.name}</h4>
            <p tabindex="0">${recomendation.city}  <span><img class="recomendation__ratting" src="./images/assets/star.png" />  ${recomendation.rating}</span></p>
            <p tabindex="0" class="desc">${recomendation.description}</p>
          </div>
        </div>
      </a>

  `;
};

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="add to favorite" id="likeButton" class="favorite-btn">
     Favoritkan
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="remove from favorite" id="likeButton" class="favorite-btn liked">
    Favorite
  </button>
`;
const createCategoriesRestaurant = (category) => `
  <p>${category.name}</p>
`;
const createFoodsList = (food) => `
  <li tabindex = "0">${food.name}</li>
`;
const createDrinksList = (drink) => `
  <li tabindex="0" >${drink.name}</li>
`;
const createErrorPage = () => `
<div class="page__notFound">
  <img class="image__page-not-found" src="/images/assets/jpg/not-found-picture.jpg" alt="not found"></img>
</div>
`;
const createCustomerReview = (review, getNowDate) => `
  <div tabindex="0" class="detail__review-content-item">
    <h4>${review.name || review.name.value}</h4>
      <p>“${review.review || review.review.value}” -<span>Diulas pada ${review.date || getNowDate.date}</span></p>
  </div>
`;

export {
  createListItemRestaurant,
  createDetailItemRestaurant,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
  createRecomendationTemplate,
  createCategoriesRestaurant,
  createFoodsList,
  createDrinksList,
  createCustomerReview,
  createErrorPage,
};
