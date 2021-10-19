import { combineReducers } from "redux";
import selectListingReducer from "./selectListingReducer";
import getListingsReducer from "./getListingsReducer";
const rootReducer = combineReducers({
  selectedListing: selectListingReducer,
  listings: getListingsReducer,
});

export default rootReducer;
