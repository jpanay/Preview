import { connect, dispatch } from "react-redux";
import getListingsThunk from "../actions/getListingsThunk";
import InfoModal from "../Components/InfoModal";

var mapStoreToProps = (state) => ({
  listings: state.listings,
  selectedListing: state.selectedListing,
});

var mapDispatchToProps = (dispatch) => ({
  getListings: () => {
    dispatch(getListingsThunk());
  },
});

var InfoModalContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(InfoModal);

export default InfoModalContainer;
