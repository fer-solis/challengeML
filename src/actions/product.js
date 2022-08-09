
import {
  RETRIEVE_PRODUCT
} from "./types";

import Search from "../services/search";

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const info = await Search.getDetailProduct(id);
    const description = await Search.getDescriptionProduct(id);

    const data = { ...info.data, ...description.data };
    console.log({ data });

    const {
      condition,
      currency_id,
      pictures,
      price,
      shipping,
      plain_text,
      sold_quantity,
      title,
    } = data;

    const {
      free_shipping,
    } = shipping;

    const img = pictures.length ? pictures[0].url : null;
    const descompositionPrice = String(price).split('.');

    const base = {
      author: {
        name: null,
        lastname: null,
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: descompositionPrice[0],
          decimals: descompositionPrice[1],
        },
        picture: img,
        condition,
        free_shipping,
        sold_quantity,
        description: plain_text,
      }
    };

    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: base,
    });
  } catch (err) {
    console.log(err);
  }
};