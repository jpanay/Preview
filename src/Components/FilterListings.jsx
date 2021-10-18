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
  }

  handleCheckboxChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div>
        <label htmlFor="occupied">Occupied</label>
        <input type="checkbox" name="occupied" id="occupied" checked={this.state.occupied} onChange={this.handleCheckboxChange} />
        <label htmlFor="previewed">Previewed</label>
        <input type="checkbox" name="previewed" id="previewed" checked={this.state.previewed} onChange={this.handleCheckboxChange} />
        <label htmlFor="listed">Listed</label>
        <input type="checkbox" name="listed" id="listed" checked={this.state.listed} onChange={this.handleCheckboxChange} />
      </div>
    );
  }
}

export default FilterListings;
