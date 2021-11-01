import React from "react";
import ToolItem from './ToolItem'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

class AgentToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="tools-container">
          <ToolItem title="Preview" desc="The one tool for all tools, shabang" icon={faCameraRetro} />
        </div>
      </>
    );
  }
}

export default AgentToolList;