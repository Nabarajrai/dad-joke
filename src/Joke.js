import React, { Component } from "react";

export class Joke extends Component {
  render() {
    return <li>{this.props.jokeList}</li>;
  }
}

export default Joke;
