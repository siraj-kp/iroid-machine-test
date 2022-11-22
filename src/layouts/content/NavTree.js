import {
  faAngleRight,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavTree(props) {
  return (
    <div className="d-flex align-items-center path-details">
      <FontAwesomeIcon icon={faHouseChimney} />
      <FontAwesomeIcon className="mx-2" icon={faAngleRight} />
      <p className="mb-0 primary_color">{props.title} </p>
    </div>
  );
}

export default NavTree;
