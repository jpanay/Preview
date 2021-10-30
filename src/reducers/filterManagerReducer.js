import Redux from "redux";
import store from "../store";
var filterManagerReducer = (state = {}, action) => {
  if (action.type === "FILTER_MANAGER") {
    return action.payload;
  } else return state;
};

export default filterManagerReducer;
