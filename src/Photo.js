import React, { Component } from "react";

export class Photo extends Component {
  render() {
    return (
      <div>
        <h1> I like to eat {this.props.name} </h1>
        <img />
      </div>
    );
  }
}

export default Photo;
