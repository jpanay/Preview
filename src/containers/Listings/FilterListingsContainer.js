import { connect, dispatch } from "react-redux";
import getFilteredListings from "../../actions/Listings/getFilteredListings";
import FilterListings from "../../Components/Listings/FilterListings";
import getListingsThunk from "../../actions/Listings/getListingsThunk";
var mapStoreToProps = (state) => ({
  listings: state.listings,
  filteredListings: state.filteredListings,
});

var mapDispatchToProps = (dispatch) => ({
  filterListings: (listingsArr) => {
    dispatch(getFilteredListings(listingsArr));
  },
  getListings: () => {
    dispatch(getListingsThunk());
  },
});

var FilterListingsContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(FilterListings);

export default FilterListingsContainer;
