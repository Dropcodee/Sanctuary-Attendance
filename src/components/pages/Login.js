import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.svg";
class Login extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m12 l12">
          <div className="container">
            <div className="card card__form">
              <div className="top__section green">
                <div className="facebook">
                  <Link className="fa fa-facebook" to="#" />
                </div>
              </div>
              <div className="avatar">
                <img
                  src={avatar}
                  alt="user avatar"
                  className="circle responsive-img"
                />
              </div>
              <div className="card-content">
                <form action="">
                  <div className="input-field">
                    <i className="material-icons prefix">assignment_ind</i>
                    <label htmlFor="RegNo">Enter Reg Number:</label>
                    <input type="number" id="RegNo" className="validate" />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="password" className="active">
                      Enter Password:
                    </label>
                    <input type="text" id="password" className="validate" />
                  </div>
                  <input
                    type="submit"
                    className="btn waves-effect waves-light green"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
