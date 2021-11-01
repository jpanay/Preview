import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { InlineWidget } from "react-calendly";
import { openPopupWidget } from "react-calendly";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarValue: new Date()
    };
    
    this.openPopup = this.openPopup.bind(this)
  }

  openPopup() {
    return openPopupWidget({ url: 'https://calendly.com/jasonpanay' })
  }

  render() {
    return (
      <>
        <div id="contact">
            <div className="contact-button" onClick={this.openPopup}>Get A Free Consultation With An NYC Expert</div>
          {/* <InlineWidget url="https://calendly.com/jasonpanay" /> */}
        </div>
      </>
    );
  }
}

export default Contact;