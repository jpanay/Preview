import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarValue: new Date()
    };
    
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    console.log(e)
  }

  render() {
    return (
      <>
        <div id="incentives">
          <div className="incentive">
            <div className="incentive-button">Get A Free Consultation With An NYC Expert</div>
          </div>
        </div>

        {/* <p>Free, No Pressure Consulting Call</p>
        <div className="contact">
          <div className="book">
            <div className="book-date">
              <input placeholder="Date: 00/00/00"/>
            </div>
            <div className="book-time">
              <input placeholder="Time: 00:00 PM"/>
            </div>
            <div className="book-type">
              <select name="type" id="type">
                <option value="">Type</option>
                <option value="phone">Phone Call</option>
                <option value="zoom">Zoom Call</option>
                <option value="meets">Google Meets Call</option>
              </select>
            </div>
            <div className="book-btn">BOOK</div>
            <Calendar onChange={this.onChange} value={this.state.calendarValue} />
          </div>
          <div className="message">  </div>
        </div> */}
      </>
    );
  }
}

export default Contact;