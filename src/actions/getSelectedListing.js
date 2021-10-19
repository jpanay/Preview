import store from "../store";

const getSelectedListing = (selectedListing) => {
  let currentStore = store.getState();
  return {
    type: "GET_SELECTED_LISTING",
    payload: selectedListing,
    currStore: currentStore,
  };
};

export default getSelectedListing;
