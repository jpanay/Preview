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

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.listings) !== JSON.stringify(prevProps.listings)
    ) {
      this.handleFilterListings();
    }
  }

  handleFilterListings() {
    let listings = this.props.listings.filter((item) => {
      let isFiltered = true;
      for (const key in this.state) {
        if (item[key] !== this.state[key] && this.state[key] === true) {
          isFiltered = false;
        }
      }
      return isFiltered;
    });

    listings.length > 0
      ? this.props.filterListings(listings)
      : this.props.filterListings([
          {
            address: "no matching filters",
          },
        ]);
  }

  handleCheckboxChange(e) {
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
