import { connect, dispatch } from "react-redux";
import getListingsThunk from "../../actions/Listings/getListingsThunk.js";
import getSelectedListing from "../../actions/Listings/getSelectedListing";
import HandleManagers from "../../Components/Managers/HandleManagers";

var mapStoreToProps = (state) => ({
  manager: state.manager,
  managerList: state.managerList,
  handlingManagers: state.handlingManagers,
});

var mapDispatchToProps = (dispatch) => ({
  addManager: (id) => {
    dispatch(getSelectedListing(id));
  },

  getListings: (manager) => {
    dispatch(getListingsThunk(manager));
  },
});

var HandleManagersContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(HandleManagers);

export default HandleManagersContainer;
