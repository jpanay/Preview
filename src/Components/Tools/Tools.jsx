import React from "react";
import axios from "axios";
import AgentToolList from "./ToolLists/AgentToolList"
import ClientToolList from "./ToolLists/ClientToolList"

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolset: 'agent'
    };

    this.setToolset = this.setToolset.bind(this)
  }

  setToolset(toolset) {
    this.setState({ toolset })
  }

  render() {
    if (this.state.toolset === 'client') {
      return (
        <>
          <div id="tools">
            <div id="tool-type">
              <div className="tool-type-btn" onClick={() => { this.setToolset('client') }}>Clients</div>
              <div className="tool-type-btn" onClick={() => { this.setToolset('agent') }}>Agents</div>
            </div>
            <ClientToolList />
          </div>
        </>
      );
    }

    if (this.state.toolset === 'agent') {
      return (
        <>
          <div id="tools">
            <div id="tool-type">
              <div className="tool-type-btn" onClick={() => { this.setToolset('client') }}>Clients</div>
              <div className="tool-type-btn" onClick={() => { this.setToolset('agent') }}>Agents</div>
            </div>
            <AgentToolList />
          </div>
        </>
      );
    }
  }
}

export default Tools;