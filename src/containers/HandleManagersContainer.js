import { connect, dispatch } from "react-redux";
import getListingsThunk from "../actions/getListingsThunk.js";
import getSelectedListing from "../actions/getSelectedListing";
import HandleManagers from "../Components/HandleManagers";

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
