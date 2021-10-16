import axios from "axios";
import React from "react";
import Navigation from "./Navigation";
import GoogleMap from "./GoogleMap";
import Listings from "./Listings";
// import MockData from "../mockData";
// using data from db. can uncomment to use mockdata again
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    console.log("Mounting");
    axios
      .get("/listings")
      .then(({ data }) => {
        console.log(data);
        this.setState({ listings: data });
      })
      .catch((err) => console.log(err));
    // this.setState({ listings: MockData });
  }

  render() {
    return (
      <>
        <Navigation />
        <div id="main">
          <Listings listings={this.state.listings} />
          <GoogleMap listings={this.state.listings} />
        </div>
      </>
    );
  }
}

export default App;
