import React from "react";
import axios from "axios";
import About from "./Components/About"
import Incentives from "./Components/Incentives"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <About />
        <Incentives />
      </>
    );
  }
}

export default Home;
