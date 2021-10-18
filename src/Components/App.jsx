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
    this.handleGeocoding = this.handleGeocoding.bind(this)
  }

  componentDidMount() {
    console.log("Mounting");
    this.getListings();
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

  handleGeocoding(address) {
    const regexAddress = address.replace(/\s+/g, '+')
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${regexAddress},+${this.state.area},+NY&key=${process.env.GOOGLE_API_KEY}`)
      .then(({ data }) => {
        console.log('Geocoding Data')
        const result = data.results[0]
        console.log(result)
        const position = result.geometry.location
        const full_address = result.formatted_address
        const zipcode = result.address_components[7].short_name
        const newData = { 
          position: position,
          full_address: full_address,
          zipcode: zipcode
        }
        return newData
      })
      .catch((err) => { return err })
  }

  render() {
    return (
      <>
        {/* <Navigation /> */}
        <div id="main">
        <GoogleMap listings={this.state.listings} />
          <Listings
            selectListing={this.selectListing}
            listings={this.state.listings}
            handleGeocoding={this.handleGeocoding}
          />
          <InfoModal
            getListings={this.getListings}
            editListing={this.editListing}
            selectedListing={this.state.selectedListing}
          />
          {/* <InfoTab selectedListing={this.state.selectedListing} /> */}
          
        </div>
      </>
    );
  }
}

export default App;
