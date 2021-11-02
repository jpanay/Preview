import React from "react";
import axios from "axios";

class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <div id="listings-action-bar">
          <div>Listings Action Bar</div>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        </div>
      </>
    );
  }
}

export default ActionBar;
