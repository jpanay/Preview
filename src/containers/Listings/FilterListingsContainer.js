import { connect, dispatch } from "react-redux";
import getFilteredListings from "../../actions/Listings/getFilteredListings";
import FilterListings from "../../Components/Tools/Agents/Preview/FilterListings";

var mapStoreToProps = (state) => ({
  listings: state.listings,
  filteredListings: state.filteredListings,
});

var mapDispatchToProps = (dispatch) => ({
  filterListings: (listingsArr) => {
    dispatch(getFilteredListings(listingsArr));
  },
});

var FilterListingsContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(FilterListings);

export default FilterListingsContainer;
