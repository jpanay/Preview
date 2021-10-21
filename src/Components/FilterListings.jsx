import React from "react";

class FilterListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOccupied: false,
      filterPreviewed: false,
      filterListed: false,
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFilterListings = this.handleFilterListings.bind(this);
  }

  handleFilterListings() {
    if (
      this.state.filterListed === false &&
      this.state.filterPreviewed === false &&
      this.state.filterOccupied === false
    ) {
      //dispatch an action that changes the filter list array to be a blank array which would render all listings
      this.props.filterListings([]);
    } else {
      //create a filtered listing that matches the exact values
      let filteredList = this.props.listings.filter((listing) => {
        if (
          listing.occupied === this.state.filterOccupied &&
          listing.previewed === this.state.filterPreviewed &&
          listing.listed === this.state.filterListed
        ) {
          return listing;
        }
      });
      if (filteredList.length === 0) {
        this.props.filterListings([
          {
            address: "no matching filters",
            area: "n/a",
            baths: 0,
            beds: 0,
            description: "n/a",
            full_address: "n/a",
            listed: false,
            manager: "n/a",
            occupied: false,
            position: { lat: 40.7385431, lng: -73.9819469 },
            previewed: false,
            price: 0,
            unit: "n/a",
            zipcode: "n/a",
          },
        ]);
      } else {
        this.props.filterListings(filteredList);
      }
    }
  }

  handleCheckboxChange(e) {
    console.log(!this.state[event.target.name]);
    this.setState({ [e.target.name]: !this.state[event.target.name] }, () =>
      this.handleFilterListings()
    );
  }

  render() {
    return (
      <div id="filter-listings">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="filterOccupied"
            id="filter-occupied"
            defaultChecked={this.state.filterOccupied}
            onChange={this.handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="filter-occupied">
            Occupied
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="filterPreviewed"
            id="filter-previewed"
            defaultChecked={this.state.filterPreviewed}
            onChange={this.handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="filter-previewed">
            Previewed
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="filterListed"
            id="filter-listed"
            defaultChecked={this.state.filterListed}
            onChange={this.handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="filter-listed">
            Listed
          </label>
        </div>
      </div>
    );
  }
}

export default FilterListings;
