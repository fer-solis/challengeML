
import {
  RETRIEVE_SEARCH,
  SAVE_SEARCH,
} from "./types";

import Search from "../services/search";

export const getSearch = (query) => async (dispatch) => {
  try {
    const res = await Search.getSearch(query);
    const items = [];

    const {
      data,
    } = res;

    const {
      filters,
      results,
    } = data;

    const categories = [];

    if (filters.length) {
      const {
        values = [],
      } = filters[0];

      if (values.length) {
        const {
          path_from_root,
        } = values[0];

        path_from_root.map(item => categories.push(item.name));
      }
    }

    results.forEach(element => {
      const {
        address,
        condition,
        currency_id,
        id,
        price,
        shipping,
        thumbnail,
        title,
      } = element;

      const {
        free_shipping,
      } = shipping;

      const {
        city_name,
      } = address;

      const descompositionPrice = String(price).split('.');

      items.push({
        city_name,
        condition,
        free_shipping,
        id,
        picture: thumbnail,
        price: {
          currency: currency_id,
          amount: descompositionPrice[0],
          decimals: descompositionPrice[1],
        },
        title,
      });
    });

    const products = {
      author: {
        name: null,
        lastname: null,
      },      
      categories,
      items,
    };
    console.log({ items });

    dispatch({
      type: RETRIEVE_SEARCH,
      payload: products,
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveSearch = (query) => (dispatch) => {
  dispatch({
    type: SAVE_SEARCH,
    payload: query,
  });
}