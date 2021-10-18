import React, { useState } from "react";

// InfoModal should have the ability to edit the current selected unit
// needs an edit function passed in, needs a function passed in: functions need to interact with Mongo based on the id
let InfoModal = ({ selectedListing, editListing }) => {
  let [address, setAddress] = useState(selectedListing.address);
  let [unit, setUnit] = useState(selectedListing.unit);
  let [price, setPrice] = useState(selectedListing.price);
  let [baths, setBaths] = useState(selectedListing.baths);
  let [beds, setBeds] = useState(selectedListing.beds);
  let [description, setDescription] = useState(selectedListing.description);
  let [occupied, setOccupied] = useState(selectedListing.occupied);
  let [previewed, setPreviewed] = useState(selectedListing.previewed);
  let [listed, setListed] = useState(selectedListing.listed);
  let [isEditing, setIsEditing] = useState(false);

  let closeModal = () => {
    setIsEditing(false);
    document.getElementById("info-modal-wrapper").style.display = "none";
  };

  let sendEditedListing = () => {
    editListing(selectedListing._id, {
      address,
      unit,
      price,
      baths,
      beds,
      description,
      occupied,
      previewed,
      listed,
    });
    closeModal();
  };

  return (
    <div id="info-modal-wrapper">
      <div className="modal-content">
        <span onClick={() => closeModal()} className="close">
          &times;
        </span>
        {!isEditing ? (
          <>
            <div>{selectedListing.address}</div>
            <div>{selectedListing.unit}</div>
            <div>${selectedListing.price}</div>
            <div>{selectedListing.beds}</div>
            <div>{selectedListing.baths}</div>
            <div>{selectedListing.description}</div>
            <div>{selectedListing.occupied}</div>
            <div>{selectedListing.previewed}</div>
            <div>{selectedListing.listed}</div>
          </>
        ) : (
          <>
            <div>{selectedListing.address}</div>
            <input
              onChange={() => setAddress(event.target.value)}
              placeholder={selectedListing.address}
            ></input>
            <div>{selectedListing.unit}</div>
            <input
              onChange={() => setUnit(event.target.value)}
              placeholder={selectedListing.unit}
            ></input>
            <div>${selectedListing.price}</div>
            <input
              onChange={() => setPrice(event.target.value)}
              placeholder={selectedListing.price}
            ></input>
            <div>{selectedListing.beds}</div>
            <input
              onChange={() => setBeds(event.target.value)}
              placeholder={selectedListing.beds}
            ></input>
            <div>{selectedListing.baths}</div>
            <input
              onChange={() => setBaths(event.target.value)}
              placeholder={selectedListing.baths}
            ></input>
            <div>{selectedListing.description}</div>
            <input
              onChange={() => setDescription(event.target.value)}
              placeholder={
                selectedListing.description.length === 0
                  ? "description"
                  : selectedListing.description
              }
            ></input>
            <div>
              <label htmlFor="modal-occupied">Occupied</label>
              <input
                type="checkbox"
                name="modal-occupied"
                defaultChecked={selectedListing.occupied}
                onChange={() => setOccupied(!occupied)}
              />
              <label htmlFor="modal-previewed">Previewed</label>
              <input
                type="checkbox"
                name="modal-previewed"
                defaultChecked={selectedListing.previewed}
                onChange={() => setPreviewed(!previewed)}
              />
              <label htmlFor="modal-listed">Listed</label>
              <input
                type="checkbox"
                name="modal-listed"
                defaultChecked={selectedListing.previewed}
                onChange={() => setListed(!listed)}
              />
            </div>
          </>
        )}
        {isEditing ? (
          <div>
            <button onClick={() => sendEditedListing()}>Submit</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => setIsEditing(true)}>Delete</button>
      </div>
    </div>
  );
};

export default InfoModal;
