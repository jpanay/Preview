import { connect, dispatch } from "react-redux";
import getListingsThunk from "../actions/getListingsThunk.js";
import getSelectedListing from "../actions/getSelectedListing";
import App from "../Components/App";

var mapStoreToProps = (state) => ({
  listings: state.listings,
  selectedListing: state.selectedListing,
});

var mapDispatchToProps = (dispatch) => ({
  selectListing: (id) => {
    dispatch(getSelectedListing(id));
  },
  getListings: () => {
    dispatch(getListingsThunk());
  },
});

var AppContainer = connect(mapStoreToProps, mapDispatchToProps)(App);

export default AppContainer;