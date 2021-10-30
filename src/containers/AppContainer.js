import { connect, dispatch } from "react-redux";
import getListingsThunk from "../actions/Listings/getListingsThunk.js";
import getSelectedListing from "../actions/Listings/getSelectedListing";
import App from "../Components/App";
import changePage from "../actions/pages/changePage";
var mapStoreToProps = (state) => ({
  listings: state.listings,
  selectedListing: state.selectedListing,
  currentPage: state.currentPage,
});

var mapDispatchToProps = (dispatch) => ({
  selectListing: (id) => {
    dispatch(getSelectedListing(id));
  },
  getListings: (manager) => {
    dispatch(getListingsThunk(manager));
  },
  changePage: (newPage) => {
    dispatch(changePage(newPage));
  },
});

var AppContainer = connect(mapStoreToProps, mapDispatchToProps)(App);

export default AppContainer;
