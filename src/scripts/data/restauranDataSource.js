/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
      .then((responseJson) => responseJson.json())
      .catch(() => 400);
    return response;
  }
}

export default RestaurantDataSource;
