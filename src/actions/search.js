
import {
  RETRIEVE_SEARCH
} from "./types";

import Search from "../services/search";

export const getSearch = (query) => async (dispatch) => {
  try {
    const res = await Search.getSearch(query);

    dispatch({
      type: RETRIEVE_SEARCH,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};