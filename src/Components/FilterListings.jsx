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
  }

  handleCheckboxChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="filter-occupied" id="filter-occupied" checked={this.state.filterOccupied} onChange={this.handleCheckboxChange} />
          <label className="form-check-label" htmlFor="filter-occupied">Occupied</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="filter-previewed" id="filter-previewed" checked={this.state.filterPreviewed} onChange={this.handleCheckboxChange} />
          <label className="form-check-label" htmlFor="filter-previewed">Previewed</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="filter-listed" id="filter-listed" checked={this.state.filterListed} onChange={this.handleCheckboxChange} />
          <label className="form-check-label" htmlFor="filter-listed">Listed</label>
        </div>
      </div>
    );
  }
}

export default FilterListings;
