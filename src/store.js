import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";

// add in any state you need here
let initialState = {
  listings: [],
  selectedListing: {},
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
