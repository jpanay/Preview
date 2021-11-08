import React from "react";
import ToolItem from './ToolItem'
import { faCameraRetro, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

class AgentToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="tools-container">
          <ToolItem title="Preview" desc="Entry point to the rental pipeline" icon={faCameraRetro} />
          <ToolItem title="Message Boss" desc="Templatize, generate, and send messages" icon={faEnvelopeSquare} />
        </div>
      </>
    );
  }
}

export default AgentToolList;