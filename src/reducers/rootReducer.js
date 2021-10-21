import { combineReducers } from "redux";
import selectListingReducer from "./selectListingReducer";
import filterListingsReducer from "./filterListingsReducer";
import getListingsReducer from "./getListingsReducer";
const rootReducer = combineReducers({
  selectedListing: selectListingReducer,
  listings: getListingsReducer,
  filteredListings: filterListingsReducer,
});

export default rootReducer;
