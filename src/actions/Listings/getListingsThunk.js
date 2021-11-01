import axios from "axios";
import thunk from "redux-thunk";
import getListings from "./getListings";
var getListingsThunk = () => {
  return (dispatch) => {
    axios
      .get("/listings")
      .then(({ data }) => {
        dispatch(getListings(data));
      })
      .catch((err) => console.log(err));
  };
};

export default getListingsThunk;
