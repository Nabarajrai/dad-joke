import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import cola from "./cola.jpg";
import "./cola.css";

export class Cola extends Component {
  render() {
    return (
      <div className="Cola">
        <Message>
          <h2>I am Coca cola</h2>
          <img src={cola} alt="photo" />
          <Link to="/">Back to </Link>
        </Message>
      </div>
    );
  }
}

export default Cola;
