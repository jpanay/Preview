import React from "react";
import axios from "axios";

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manager: "XYZ Properties",
      address: "",
      full_address: "",
      area: "Manhattan",
      zipcode: "",
      position: { lat: 40.75, lng: -74.01 },
      unit: "",
      price: "",
      beds: "",
      baths: "",
      description: "",
      occupied: false,
      previewed: false,
      listed: false,
    };
    this.handleGeocoding = this.handleGeocoding.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckboxChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleGeocoding(address) {
    const regexAddress = address.replace(/\s+/g, "+");
    return axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${regexAddress},+${this.state.area},+NY&key=${process.env.GOOGLE_API_KEY}`
      )
      .then(({ data }) => {
        console.log("Geocoding Data");
        const result = data.results[0];
        console.log(result);
        const position = result.geometry.location;
        const full_address = result.formatted_address;
        const zipcode = result.address_components[7].short_name;
        const newData = {
          position: position,
          full_address: full_address,
          zipcode: zipcode,
        };
        return newData;
      })
      .catch((err) => {
        return err;
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleGeocoding(this.state.address)
      .then((newData) => {
        this.setState(newData);
        axios
          .post("/listings", { newListing: this.state })
          .then(({ data }) => {
            this.props.addListing(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.props.getListings();
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="add-listing" className="container">
        <div className="row align-items-start pt-2">
          <label htmlFor="address" className="col-4">
            Address
          </label>
          <label htmlFor="unit" className="col-1">
            Unit
          </label>
          <label htmlFor="price" className="col-2">
            Price
          </label>
          <label htmlFor="beds" className="col-1">
            Beds
          </label>
          <label htmlFor="baths" className="col-1">
            Baths
          </label>
          <label htmlFor="occupied" className="col-1">
            Occ.
          </label>
          <label htmlFor="previewed" className="col-1">
            Prev.
          </label>
          <label htmlFor="listed" className="col-1">
            List.
          </label>
        </div>
        <div className="row align-items-start">
          <input
            className="col-4 form-control-sm"
            type="text"
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input
            className="col-1 form-control-sm"
            type="text"
            name="unit"
            placeholder="unit"
            value={this.state.unit}
            onChange={this.handleChange}
          />
          <input
            className="col-2 form-control-sm"
            type="number"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <input
            className="col-1 form-control-sm"
            type="number"
            name="beds"
            placeholder="beds"
            value={this.state.beds}
            onChange={this.handleChange}
          />
          <input
            className="col-1 form-control-sm"
            type="number"
            name="baths"
            placeholder="baths"
            value={this.state.baths}
            onChange={this.handleChange}
          />

          <input
            className="col-1 big-checkbox"
            type="checkbox"
            name="occupied"
            id="occupied"
            checked={this.state.occupied}
            onChange={this.handleCheckboxChange}
          />
          <input
            className="col-1 big-checkbox"
            type="checkbox"
            name="previewed"
            id="previewed"
            checked={this.state.previewed}
            onChange={this.handleCheckboxChange}
          />
          <input
            className="col-1 big-checkbox"
            type="checkbox"
            name="listed"
            id="listed"
            checked={this.state.listed}
            onChange={this.handleCheckboxChange}
          />
        </div>

        <div className="row mt-2"></div>
        <div className="row align-items-start">
          <select
            className="col form-select mr-2"
            name="manager"
            id="manager"
            value={this.state.manager}
            onChange={this.handleChange}
          >
            <option value="XYZ Properties">XYZ Properties</option>
            <option value="Merchant Group">Merchant Group</option>
          </select>
          <select
            className="col form-select mr-2"
            name="area"
            id="area"
            value={this.state.areas}
            onChange={this.handleChange}
          >
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>

          <input className="col-2 btn btn-primary" type="submit" value="ADD" />
        </div>
      </form>
    );
  }
}

export default AddListing;
