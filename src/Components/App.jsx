import React from "react";
import Navigation from "./Navigation";
import GoogleMap from "./GoogleMap";
import Listings from "./Listings";
import InfoTab from "./InfoTab";
import axios from "axios";
// import MockData from "../mockData";
// using data from db. can uncomment to use mockdata again
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      selectedListing: {},
    };
    this.selectListing = this.selectListing.bind(this);
  }
  selectListing(id) {
    for (let listing of this.state.listings) {
      if (listing._id === id) {
        this.setState({ selectedListing: listing });
      }
    }
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
  }

  render() {
    return (
      <>
        {/* <Navigation /> */}
        <div id="main" className="container">
          <Listings
            selectListing={this.selectListing}
            listings={this.state.listings}
          />
          {/* <InfoTab selectedListing={this.state.selectedListing} /> */}
          <GoogleMap listings={this.state.listings} />
        </div>
      </>
    );
  }
}

export default App;
