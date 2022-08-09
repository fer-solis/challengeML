import { combineReducers } from "redux";
import search from './search';
import product from './product';

export default combineReducers({
   search,
   product,
});