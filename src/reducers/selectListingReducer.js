import Redux from "redux";
import store from "../store.js";

var selectListingReducer = (state = {}, action) => {
  if (action.type === "GET_SELECTED_LISTING") {
    let modal = document.getElementById("info-modal-wrapper");
    console.log(store);
    for (let listing of action.currStore.listings) {
      if (listing._id === action.payload) {
        console.log(listing);
        return listing;
      }
      modal.style.display = "block";
    }
  } else {
    return state;
  }
};

export default selectListingReducer;
