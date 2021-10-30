import React from "react";
import axios from "axios";

let HandleManagers = ({ manager }) => (
  <form id="add-manager" className="container">
    <div className="row align-items-start ">Selected Manager</div>
    <div className="row align-items-start">
      <select className="col form-select mr-2" name="manager" id="manager">
        <option value="XYZ Properties">XYZ Properties</option>
        <option value="Merchant Group">Merchant Group</option>
      </select>
      <input className="btn btn-primary" type="submit" value="DELETE" />
    </div>
    <div className="row align-items-start pt-2">
      <label htmlFor="manager" className="col-1"></label>
    </div>
    <div className="row align-items-start ">New Manager</div>

    <div className="row mt-2"></div>
    <div className="row align-items-start">
      <input type="text" placeholder="XYZ Properties"></input>
      <input className="btn btn-primary" type="submit" value="ADD" />
    </div>
  </form>
);

export default HandleManagers;
