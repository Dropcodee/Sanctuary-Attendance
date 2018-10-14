import React from "react";
import { Link } from "react-router-dom";
import Newmember from "../../img/new.svg";
export default () => {
  return (
    <div>
      <div className="card">
        <Link to="/existing">
          <div className="card-image waves-effect waves-light">
            <img src={Newmember} alt="new member registration" />
            <span className="card-title black-text">New Members</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
