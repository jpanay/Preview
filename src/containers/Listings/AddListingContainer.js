import { connect } from "react-redux";
import AddListing from "../../Components/Tools/Agents/Preview/AddListing";
import getListingsThunk from "../../actions/Listings/getListingsThunk";
import handleAddListing from "../../actions/Listings/handleAddListing";

let mapDispatchToProps = (dispatch) => ({
  addListing: (newListing) => {
    dispatch(handleAddListing(newListing));
  },
  getListings: () => {
    dispatch(getListingsThunk());
  },
});

var AddListingContainer = connect(null, mapDispatchToProps)(AddListing);

export default AddListingContainer;
