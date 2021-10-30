import { connect, dispatch } from "react-redux";
import getListingsThunk from "../../actions/Listings/getListingsThunk";
import InfoModal from "../../Components/Modal/InfoModal";

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
