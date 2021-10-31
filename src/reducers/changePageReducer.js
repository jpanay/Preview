import Redux from "redux";
var changePageReducer = (state = "", action) => {
  if (action.type === "CHANGE_PAGE") {
    return action.payload;
  } else {
    return state;
  }
};

export default changePageReducer;
