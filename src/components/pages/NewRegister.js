import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.svg";
class Newregister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      reg_no: "",
      webmail: "",
      dob: "",
      sex: "",
      dept: "",
      level: "",
      password: "",
      con_password: "",
      hall: "",
      room: "",
      reasons: "",
      error: {},
      newMember: {}
    };
  }

  static defaultProps = {
    sex: ["Male", "Female"],
    level: ["100", "200", "300", "400", "500"]
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.reg_no === "" ||
      this.state.webmail === "" ||
      this.state.dob === "" ||
      this.state.sex === "" ||
      this.state.dept === "" ||
      this.state.level === "" ||
      this.state.hall === "" ||
      this.state.room === "" ||
      this.state.password === "" ||
      this.state.con_password === "" ||
      this.state.reasons === ""
    ) {
      const err = {
        error: "All Fields are required"
      };
      this.setState({ error: err });
      console.log(this.state.error);
    } else if (this.state.password !== this.state.con_password) {
      const err = {
        error: "Confirm Password must be equal to Password"
      };
      this.setState({ error: err });
    } else {
      const newMem = {
        name: this.state.name,
        reg_no: this.state.reg_no,
        webmail: this.state.webmail,
        dob: this.state.dob,
        sex: this.state.sex,
        dept: this.state.dept,
        level: this.state.level,
        hall: this.state.hall,
        room: this.state.room,
        password: this.state.con_password,
        reasons: this.state.reasons
      };
      console.log(newMem);

      // this.newMember(newMem)
    }
  };
  render() {
    let sex = this.props.sex.map(sex => {
      return (
        <option key={sex} value="sex">
          {sex}
        </option>
      );
    });
    let level = this.props.level.map(level => {
      return (
        <option key={level} value="level">
          {level}
        </option>
      );
    });
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
                <form action="" onSubmit={this.submit}>
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <label htmlFor="name">Full Name:</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">assignment_ind</i>
                    <label htmlFor="RegNo">Enter Reg Number:</label>
                    <input
                      type="number"
                      id="RegNo"
                      className="validate"
                      name="reg_no"
                      value={this.state.reg_no}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">assignment_ind</i>
                    <label htmlFor="webmail">Enter Webmail:</label>
                    <input
                      type="email"
                      id="webmail"
                      className="validate"
                      name="webmail"
                      value={this.state.webmail}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">cake</i>
                    <label htmlFor="dob" className="active">
                      Enter Your Date of Birth:
                    </label>
                    <input
                      type="text"
                      id="DOB"
                      className="validate datepicker"
                      placeholder="Choose Your Date of Birth"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">wc</i>
                    <select name="gender" value={this.state.sex} onChange={this.onChange}>
                      {sex}
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">school</i>
                    <label htmlFor="Dept" className="active">
                      Enter Your Department:
                    </label>
                    <input
                      type="text"
                      id="Dept"
                      className="validate"
                      name="dept"
                      value={this.state.dept}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">swap_vert</i>
                    <select name="level" value={this.state.level} onChange={this.onChange}>
                      {level}
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="hall" className="active">
                      Enter Hall of Residence:
                    </label>
                    <input
                      type="text"
                      id="hall"
                      className="validate"
                      name="hall"
                      value={this.state.hall}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="room" className="active">
                      Enter Room Number:
                    </label>
                    <input
                      type="text"
                      id="room"
                      className="validate"
                      name="room"
                      value={this.state.room}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> bubble_chart</i>
                    <textarea
                      id="reasons"
                      className="materialize-textarea"
                      name="reasons"
                      value={this.state.reasons}
                      onChange={this.onChange}
                    />
                    <label htmlFor="reasons">
                      Enter Your Reasons for joining Sanctuary Unit
                    </label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="password" className="active">
                      Enter Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="validate"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="checkPass" className="active">
                      Re-Type Password:
                    </label>
                    <input
                      type="password"
                      id="checkPass"
                      className="validate"
                      name="con_password"
                      value={this.state.con_password}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn waves-effect waves-light green">
                    Join Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newregister;
