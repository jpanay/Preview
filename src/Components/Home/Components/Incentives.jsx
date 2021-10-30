import React from "react";

class Incentives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>Incentives</div>
        <div>
          {/* Free consultation and quiz incentives */}
          Looking To Buy, Sell, Or Rent: 
          {/* Funnel for info */}
          1. Get A Free Consultation With An NYC Expert
          {/* Quiz */}
          2. Take Our Perfect Fit Quiz
        </div>
        <div>
          {/* Free appraisal / comp analysis */}
          Are you overpaying for rent?
          Get A Free Analysis From Our NYC Rental Expert
        </div>
      </>
    );
  }
}

export default Incentives;