import React from "react";

let Listings = () => {
  return (
    <div>
      <div id="sidebar-1" class="sidebar">
        <p class="label">Sidebar 1</p>
        <div id="addLocation">
          <input type="text" />
          <button>ADD</button>
        </div>
        <div class="object">300 East 31st Street</div>
        <div>11 units | 9 occupied | 2 vacant</div>
        <div class="object">24 7th Avenue</div>
        <div>224 units | 192 occupied | 22 vacant</div>
        <div class="object">17 West 26th Street</div>
        <div>62 units | 39 occupied | 23 vacant</div>
      </div>
      <div id="sidebar-2" class="sidebar">
        <p class="label">Sidebar 2 - EDIT </p>
        <div class="object">Unit: 2B | $2400 | 2 bed | 1 bath | Occupied</div>
        <div>Here is a description of the property and info</div>
        <div>Potentially will be auto generated hmmm?</div>
        <div class="object">Unit: 2D | $2400 | 3 bed | 2 bath | Occupied</div>
        <div class="object">Unit: 2C | $2400 | 2 bed | 1 bath | Occupied</div>
        <div class="object">Unit: 3A | $2400 | 1 bed | 1 bath | Unoccupied</div>
      </div>

      <div id="mapid"></div>
    </div>
  );
};

export default Listings;
