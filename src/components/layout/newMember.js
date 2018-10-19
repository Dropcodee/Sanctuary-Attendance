import React from "react";
import { Link } from "react-router-dom";
import Newmember from "../../img/new.svg";
export default () => {
  return (
    <div>
      <div className="card-large">
        <Link to="/registernew">
          <div className="card-image waves-effect waves-light">
            <img
              src={Newmember}
              alt="new member registration"
              style={{ width: "312px", height: "312px" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
