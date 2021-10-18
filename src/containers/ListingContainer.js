import { connect, dispatch } from "react-redux";
import Listing from "../Components/Listing";
import getSelectedListing from "../actions/getSelectedListing";
var mapStoreToProps = (state) => ({
  listings: state.listings,
});

let mapDispatchToProps = (dispatch) => ({
  selectListing: (id) => {
    dispatch(getSelectedListing(id));
  },
});

var ListingContainer = connect(mapStoreToProps, mapDispatchToProps)(Listing);

export default ListingContainer;
