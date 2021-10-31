import React from "react";
import axios from "axios";
import About from "./Components/About"
import Contact from "./Components/Contact"
import HomeCarousel from "./Components/Carousel"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <About />
        <Contact />
        <HomeCarousel />
      </>
    );
  }
}

export default Home;
