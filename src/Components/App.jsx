import React from "react";
import Navigation from "./Navigation";
import GoogleMap from "./GoogleMap";
import Listings from "./Listings";
import InfoModal from "./InfoModal";
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
    this.editListing = this.editListing.bind(this);
    this.getListings = this.getListings.bind(this);
  }
  // makes a patch request to edit the listing in the database. Then retrieves the new edited listings.

  editListing(listingID, editedListing) {
    axios
      .patch("/listings", {
        listingID: listingID,
        updatedValues: editedListing,
      })
      .then(() => this.getListings())
      .catch((err) => console.log("could not edit listings"));
  }

  selectListing(id) {
    let modal = document.getElementById("info-modal-wrapper");
    for (let listing of this.state.listings) {
      console.log(listing);
      if (listing._id === id) {
        this.setState({ selectedListing: listing });
      }
    }
    modal.style.display = "block";
  }

  getListings() {
    axios
      .get("/listings")
      .then(({ data }) => {
        this.setState({ listings: data });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    console.log("Mounting");
    this.getListings();

    // this.setState({ listings: MockData });
  }

  render() {
    return (
      <>
        <Navigation />
        <div id="main">
          <Listings
            selectListing={this.selectListing}
            listings={this.state.listings}
          />
          <InfoModal
            editListing={this.editListing}
            selectedListing={this.state.selectedListing}
          />
          <GoogleMap listings={this.state.listings} />
        </div>
      </>
    );
  }
}

export default App;
