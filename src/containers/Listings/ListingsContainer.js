import { connect, dispatch } from "react-redux";
import Listings from "../../Components/Tools/Agents/Preview/Listings";

var mapStoreToProps = (state) => ({
  listings: state.listings,
  filteredListings: state.filteredListings,
  manager: state.manager,
  addManager: state.addManager,
});

var ListingsContainer = connect(mapStoreToProps, null)(Listings);

export default ListingsContainer;
