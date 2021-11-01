import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ToolItem(props) {

  return (
    <>
      <div className="tool-item">
        <div className="tool-item-image"><FontAwesomeIcon icon={props.icon} color={"#2C2C2C"}/></div>
        <div className="tool-item-body">
          <div className="tool-item-title">{props.title}</div>
          <div className="tool-item-desc">{props.desc}</div>
          <div className="tool-item-btn">Use</div>
        </div>
      </div>
    </>
  );

}

export default ToolItem;