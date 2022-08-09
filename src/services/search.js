import http from "../http-common"
import axios from 'axios';

const getSearch = (query) => {
  return http.get(`sites/MLA/search?q=${query}&limit=4`);
};

const getDetailProduct = (id) => {
  return http.get(`items/${id}`);
};

const getDescriptionProduct = (id) => {
  return http.get(`items/${id}/description`);
};

const Search = {
  getDetailProduct,
  getDescriptionProduct,
  getSearch,
};


export default Search;

export const API = 'https://api.mercadolibre.com/';

export const fetchData = async query => {
  const url = `${API}sites/MLA/search?q=${query}&limit=4`;

  return await axios.get(url);
};

export const fetchDetailProduct = async id => {
  const url = `${API}items/${id}`;

  return await axios.get(url);
};

export const fetchDescriptionProduct = async id => {
  const url = `${API}items/${id}/description`;

  return await axios.get(url);
};