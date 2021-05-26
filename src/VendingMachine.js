import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./vending.css";

export class VendingMachine extends Component {
  render() {
    return (
      <div className="vending">
        <Message>
          {" "}
          <h1>Hellow I am vending Machine you can take me everything</h1>
        </Message>
        <Message>
          <Link to="/">Vending</Link>
          <Link to="/cola">Cola</Link>
          <Link to="/beer">Beer</Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
