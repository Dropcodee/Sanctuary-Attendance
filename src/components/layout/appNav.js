import React, { Component } from "react";
import { Link } from "react-router-dom";
class AppNav extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper white">
              <Link to="/" className="brand-logo center black-text">
                Sanctuary Unit
              </Link>
              <Link
                to="#!"
                className="sidenav-trigger"
                data-target="mobile-demo"
              >
                <i className="material-icons black-text"> menu</i>
              </Link>
              <ul
                id="nav-mobile"
                className="right hide-on-med-and-down black-text"
              >
                <li>
                  <Link to="/" className="black-text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Bookings" className="black-text">
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link to="/Account" className="black-text">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/History" className="black-text">
                    {" "}
                    Transaction History
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/Account">Account</Link>
            </li>
            <li>
              <Link to="/History">Transaction History</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default AppNav;
