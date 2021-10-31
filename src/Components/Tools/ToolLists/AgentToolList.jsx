import React from "react";
import axios from "axios";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

class AgentToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="tools-container">

          <div className="tool-item">
            <div className="tool-item-image"><FontAwesomeIcon icon={faCoffee} color={"#2C2C2C"}/></div>
            <div className="tool-item-body">
              <div className="tool-item-title">Tool Title</div>
              <div className="tool-item-desc">The one tool for all tools, shabang</div>
              <div className="tool-item-btn">Use</div>
            </div>
          </div>

          <div className="tool-item">
          <div className="tool-item-image"></div>
            <div className="tool-item-title">Tool Title</div>
            <div className="tool-item-body">The one tool for all tools, shabang</div>
            <div className="tool-item-btn">Use</div>
          </div>
          <div className="tool-item">
            <div className="tool-item-image">
              <img src=""alt="" />
            </div>
            <div className="tool-item-title">Tool Title</div>
            <div className="tool-item-body">The one tool for all tools, shabang</div>
            <div className="tool-item-btn">Use</div>
          </div>
          <div className="tool-item">
            <div className="tool-item-image">
              <img src=""alt="" />
            </div>
            <div className="tool-item-title">Tool Title</div>
            <div className="tool-item-body">The one tool for all tools, shabang</div>
            <div className="tool-item-btn">Use</div>
          </div>
        </div>
      </>
    );
  }
}

export default AgentToolList;