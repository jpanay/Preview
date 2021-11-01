import React from "react";
import ToolItem from './ToolItem'
import { faCity } from '@fortawesome/free-solid-svg-icons'
class ClientToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Affordability, Mortgage, Rent Estimator, Rental Investing

  render() {
    return (
      <>
        <div id="tools-container">
          <ToolItem title="Affordability Calculator" desc="The one tool for all tools, shabang" icon={faCity} />
          <ToolItem title="Mortgage Calculator" desc="The one tool for all tools, shabang" icon={faCity} />
          <ToolItem title="Rent Estimator" desc="The one tool for all tools, shabang" icon={faCity} />
          <ToolItem title="Rental Property Calculator" desc="The one tool for all tools, shabang" icon={faCity} />
        </div>
      </>
    );
  }
}

export default ClientToolList;