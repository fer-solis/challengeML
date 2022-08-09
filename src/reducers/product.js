import {
  RETRIEVE_PRODUCT,
} from "../actions/types";

const initialState = {
  item:{},
};

const productReducer = (product = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_PRODUCT:
      return payload;
    default:
      return product;
  }
};

export default productReducer;