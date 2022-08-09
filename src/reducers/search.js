import {
  RETRIEVE_SEARCH,
} from "../actions/types";

const initialState = [];

const searchReducer = (search = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_SEARCH:
      return payload;
    default:
      return search;
  }
};

export default searchReducer;