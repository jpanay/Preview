import React from "react";
import axios from "axios";

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manager: 'XYZ Properties',
      address: '200 w 4th street',
      area: 'Manhattan',
      zipcode: '',
      position: { lat: 40.75, lng: -74.01},
      unit: '3d',
      price: 4000,
      beds: 2,
      baths: 1,
      description: '',
      occupied: false,
      previewed: true,
      listed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckboxChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/listings", { newListing: this.state })
      .then(({ data }) => {
        console.log(data);
        // this.setState({ listings: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="add-listing">
        <select name="manager" id="manager" value={this.state.manager} onChange={this.handleChange}>
          <option value="XYZ Properties">XYZ Properties</option>
          <option value="Merchant Group">Merchant Group</option>
        </select>
        <select name="area" id="area" value={this.state.areas} onChange={this.handleChange}>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
        <input className="" type="text" name="address" placeholder="address" value={this.state.address} onChange={this.handleChange}  />
        <input className="" type="text" name="unit" placeholder="unit" value={this.state.unit} onChange={this.handleChange}  />
        <input className="" type="number" name="price" placeholder="price" value={this.state.price} onChange={this.handleChange}  />
        <input className="" type="number" name="beds" placeholder="beds" value={this.state.beds} onChange={this.handleChange}  />
        <input className="" type="number" name="baths" placeholder="baths" value={this.state.baths} onChange={this.handleChange}  />
        
        <label htmlFor="occupied">Occupied</label>
        <input type="checkbox" name="occupied" id="occupied" checked={this.state.occupied} onChange={this.handleCheckboxChange} />
        <label htmlFor="previewed">Previewed</label>
        <input type="checkbox" name="previewed" id="previewed" checked={this.state.previewed} onChange={this.handleCheckboxChange} />
        <label htmlFor="listed">Listed</label>
        <input type="checkbox" name="listed" id="listed" checked={this.state.listed} onChange={this.handleCheckboxChange} />

        <input type="submit" value="ADD" />
      </form>
    );
  }
}

export default AddListing;
