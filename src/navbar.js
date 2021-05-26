import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class navbar extends Component {
  handleClick = () => {
    alert("you are loggin in");
    this.props.history.push("/route/nabarajrai");
  };
  render() {
    const { goBack } = this.props.history;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: "purple",
          color: "white",
          padding: "1rem",
        }}
      >
        <button onClick={this.handleClick}>Log In</button>
        <button onClick={goBack}>Go back</button>
      </div>
    );
  }
}

export default withRouter(navbar);
