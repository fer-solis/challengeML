import http from "../http-common"

const getSearch = (query) => {
  return http.get(`sites/MLA/search?q=${query}&limit=4`);
};

const getDetailProduct = (id) => {
  return http.get(`items/${id}`);
};

const Search = {
  getDetailProduct,
  getSearch,
};


export default Search;