import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// add in any state you need here
var initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export const store = store;
