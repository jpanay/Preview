import React from "react";
import axios from "axios";

class ClientToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="tools-container">
          <div className="tool-item">
            <div className="tool-item-title"></div>
            <div className="tool-item-image">
              <img src=""alt="" />
            </div>
            <div className="tool-item-body"></div>
            <div className="tool-item-btn"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientToolList;