import React, { Component } from "react";
import loginImg from "../../image/gradle.svg";

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
            login
          </button>
        </div>
      </div>
    );
  }
}
