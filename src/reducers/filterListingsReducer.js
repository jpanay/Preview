import Redux from "redux";
import store from "../store";
var filterListingsReducer = (state = [], action) => {
  if (action.type === "FILTER_LISTINGS") {
    return action.payload;
  } else {
    return state;
  }
};

export default filterListingsReducer;
