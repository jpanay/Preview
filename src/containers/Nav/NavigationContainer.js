import { connect, dispatch } from "react-redux";
import Navigation from "../../Components/Nav/Navigation";
import changePage from "../../actions/pages/changePage";

var mapDispatchToProps = (dispatch) => ({
  changePage: (newPage) => {
    dispatch(changePage(newPage));
  },
});

var NavigationContainer = connect(null, mapDispatchToProps)(Navigation);

export default NavigationContainer;
