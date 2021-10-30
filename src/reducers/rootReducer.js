import { combineReducers } from "redux";
import selectListingReducer from "./selectListingReducer";
import filterListingsReducer from "./filterListingsReducer";
import getListingsReducer from "./getListingsReducer";
import changePageReducer from "./changePageReducer";
const rootReducer = combineReducers({
  selectedListing: selectListingReducer,
  listings: getListingsReducer,
  filteredListings: filterListingsReducer,
  currentPage: changePageReducer,
});

export default rootReducer;
