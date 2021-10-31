import React from "react";

class FilterListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupied: false,
      previewed: false,
      listed: false,
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFilterListings = this.handleFilterListings.bind(this);
  }

  handleFilterListings(e) {
    if (
      this.state.listed === false &&
      this.state.previewed === false &&
      this.state.occupied === false
    ) {
      //dispatch an action that changes the filter list array to be a blank array which would render all listings
      this.props.filterListings([]);
    } else {
      //create a filtered listing that matches the exact values
      // if there are two things we need to filter differently
      if (
        (this.state.occupied && this.state.previewed) ||
        (this.state.occupied && this.state.listed) ||
        (this.state.previewed && this.state.listed)
      ) {
        let filteredList = this.props.listings.filter((listing) => {
          if (
            listing.occupied === this.state.occupied &&
            listing.previewed === this.state.previewed &&
            listing.listed === this.state.listed
          ) {
            return listing;
          }
        });
        if (filteredList.length === 0) {
          this.props.filterListings([
            {
              address: "no matching filters",
            },
          ]);
        } else {
          this.props.filterListings(filteredList);
        }
      } else {
        // account for when u click a different option
        // handles if we clicked a filter to true
        if (this.state[e.target.name]) {
          let filteredList = this.props.listings.filter((listing) => {
            if (listing[e.target.name] === this.state[e.target.name]) {
              return listing;
            }
          });
          this.props.filterListings(filteredList);
        } else if (
          this.state.occupied ||
          this.state.listed ||
          this.state.previewed
        ) {
          Object.keys(this.state).map((filter) => {
            if (this.state[filter]) {
              console.log(filter);
              console.log(this.state[filter]);
              let filteredList = this.props.listings.filter((listing) => {
                if (listing[filter] === this.state[filter]) {
                  return listing;
                }
              });
              this.props.filterListings(filteredList);
            }
          });
        }
      }
    }
  }

  handleCheckboxChange(e) {
    this.setState({ [e.target.name]: !this.state[event.target.name] }, () =>
      this.handleFilterListings(e)
    );
  }

  render() {
    return (
      <div id="filter-listings">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            name="occupied"
            id="filter-occupied"
            defaultChecked={this.state.occupied}
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
            name="previewed"
            id="filter-previewed"
            defaultChecked={this.state.previewed}
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
            name="listed"
            id="filter-listed"
            defaultChecked={this.state.listed}
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