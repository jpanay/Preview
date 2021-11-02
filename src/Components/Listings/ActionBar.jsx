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
          <div>Listings Action / Filter Bar</div>
        </div>
      </>
    );
  }
}

export default ActionBar;
