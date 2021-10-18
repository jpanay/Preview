import { connect } from "react-redux";
import AddListing from "../Components/AddListing";
import getListingsThunk from "../actions/getListingsThunk";
import handleAddListing from "../actions/handleAddListing";

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
