import React from "react";
import ToolItem from './ToolItem'
import { faCity, faBalanceScaleRight, faMoneyCheckAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
class ClientToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="tools-container">
          <ToolItem title="Affordability Calculator" desc="How much can I afford?" icon={faBalanceScaleRight} />
          <ToolItem title="Mortgage Calculator" desc="How much will my monthly payments be?" icon={faMoneyCheckAlt} />
          <ToolItem title="Rent Estimator" desc="Dont overpay, pre-estimate rent" icon={faMapMarkedAlt} />
          <ToolItem title="Rental Property Calculator" desc="Can it cashflow?" icon={faCity} />
        </div>
      </>
    );
  }
}

export default ClientToolList;