import React from "react";

class Incentives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="incentives">
          <div className="incentive">
            <div className="incentive-header">Looking To Buy, Sell, or Rent?</div>
            {/* Free consultation and quiz incentives */}
            <div className="incentive-button">
              Get A Free Consultation With An NYC Expert</div>
            <div className="incentive-button">
              Take Our Perfect Fit Quiz</div>
          </div>
          <div className="incentive">
            <div className="incentive-header">Are you overpaying for rent?</div>
            <div className="incentive-button">
              Get A Free Analysis From Our NYC Rental Expert</div>
            <div className="incentive-button">
              Rent Estimator</div>
          </div>
          <div className="incentive">
            <div className="incentive-header">Checkout Our Listings!</div>
            <div className="incentive-button">All Listings</div>
          </div>
        </div>
      </>
    );
  }
}

export default Incentives;