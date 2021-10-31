import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";

// add in any state you need here
let initialState = {
  listings: [],
  filteredListings: [],
  selectedListing: {},
  manager: "XYZ Properties",
  managerList: [],
  handlingManagers: false,
  currentPage: "tools",
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
