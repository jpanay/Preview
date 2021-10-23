import { connect, dispatch } from "react-redux";
import Listings from "../Components/Listings";

var mapStoreToProps = (state) => ({
  listings: state.listings,
  filteredListings: state.filteredListings,
});

var ListingsContainer = connect(mapStoreToProps, null)(Listings);

export default ListingsContainer;
