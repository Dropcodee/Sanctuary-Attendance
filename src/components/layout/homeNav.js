import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo center black-text">
          Sanctuary Unit
        </Link>
      </div>
    </nav>
  );
};
