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
        <div>Home</div>
        <About />
        <Incentives />
        <div>Check Out Our Listings!</div>
        <div>** Button To Listings Here **</div>
        <div>** One Last Attnetion Grab Here **</div>
      </>
    );
  }
}

export default Home;
