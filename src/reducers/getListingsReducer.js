import Redux from "redux";
import store from "../store";
var getListingsReducer = (state = {}, action) => {
  if (action.type === "GET_LISTINGS") {
    return action.payload;
  } else if (action.type === "GET_LISTINGS") {
    return [...state.listings, action.payload];
  } else return state;
};

export default getListingsReducer;
