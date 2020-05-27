import React, { Component } from "react";
import loginImg from "../../image/gradle.svg";

export class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                required
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" required placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="paswword">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn" type="button">
            Register
          </button>
        </div>
      </div>
    );
  }
}
