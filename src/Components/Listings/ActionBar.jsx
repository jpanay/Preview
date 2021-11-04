import React from "react";
import axios from "axios";
import AddListingContainer from "../../containers/Listings/AddListingContainer";
import FilterListingsContainer from "../../containers/Listings/FilterListingsContainer";
class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addListingModal: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ addListingModal: false });
    document.getElementById("add-listing-modal-wrapper").style.display = "none";
    return;
  }

  render() {
    return (
      <div id="action-bar-wrapper">
        <button
          className="tool-type-btn"
          onClick={() => this.setState({ addListingModal: true })}
        >
          Add Listing
        </button>
        {this.state.addListingModal === true ? (
          <div id="add-listing-modal-wrapper">
            <div className="modal-content">
              <span onClick={() => this.closeModal()} className="close">
                &times;
              </span>
              <AddListingContainer closeModal={this.closeModal} />
            </div>
          </div>
        ) : (
          <> </>
        )}
        <FilterListingsContainer />
      </div>
    );
  }
}

export default ActionBar;
