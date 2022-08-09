
import {
  RETRIEVE_PRODUCT
} from "./types";

import Search from "../services/search";

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const res = await Search.getDetailProduct(id);

    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};