import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import beer from "./beer.jpg";
import "./beer.css";

export class Beer extends Component {
  render() {
    return (
      <div className="beer">
        <Message>
          <h2> I am beer</h2>
          <img src={beer} />
          <Link to="/">Back to</Link>
        </Message>
      </div>
    );
  }
}

export default Beer;
