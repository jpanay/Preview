import axios from 'axios';

import React from "react";
import Navigation from "./Navigation";
import GoogleMap from "./GoogleMap";
import Listings from "./Listings";
import MockData from "../mockData"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    console.log('Mounting')
    this.setState({listings: MockData});
    axios.get('listings')
      .then((res) => { console.log(res) })
  }

  render() {
    return (
      <>
        <Navigation />
        <div id="main">
          <Listings listings={this.state.listings}/>
          <GoogleMap listings={this.state.listings}/>
        </div>
      </>
    );
  }
}

export default App;
