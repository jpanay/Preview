import React from "react";
import axios from "axios";
import AgentToolList from "./ToolLists/AgentToolList"
import ClientToolList from "./ToolLists/ClientToolList"

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="tools">
          <div id="tool-type">
            <div className="tool-type-btn">Clients</div>
            <div className="tool-type-btn">Agents</div>
          </div>
          <AgentToolList />
          {/* <ClientToolList /> */}
        </div>
      </>
    );
  }
}

export default Tools;