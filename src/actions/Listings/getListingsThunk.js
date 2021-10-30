import axios from "axios";
import thunk from "redux-thunk";
import getListings from "./getListings";
var getListingsThunk = (manager) => {
  console.log("this is the thunk", manager);
  return (dispatch) => {
    axios
      .get("/listings", {
        params: {
          manager,
        },
      })
      .then(({ data }) => {
        dispatch(getListings(data));
      })
      .catch((err) => console.log(err));
  };
};

export default getListingsThunk;
