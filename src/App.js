import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogInActive: true,
    };
  }

  changeState(prev) {
    const { isLogInActive } = this.state;
    if (isLogInActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({ isLogInActive: !prevState.isLogInActive }));
  }
  render() {
    const { isLogInActive } = this.state;
    const current = isLogInActive ? "Register" : "Login";
    const currentActive = isLogInActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogInActive && (
              <Login
                containerRef={(ref) => {
                  this.current = ref;
                }}
              />
            )}
            {!isLogInActive && (
              <Register
                containerRef={(ref) => {
                  this.current = ref;
                }}
              />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner=container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
