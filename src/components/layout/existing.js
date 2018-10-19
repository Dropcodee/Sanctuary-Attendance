import React from "react";
import { Link } from "react-router-dom";
import Existing from "../../img/Existing.svg";
export default () => {
  return (
    <div>
      <div className="card-large center-align">
        <Link to="/registerexisting">
          <div className="card-image waves-effect waves-light">
            <img
              src={Existing}
              alt="Existing member registration"
              style={{ width: "312px", height: "312px" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
