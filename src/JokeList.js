import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import logo from "./embarrassed.svg";
import "./jokelist.css";

export class JokeList extends Component {
  static defaultProps = {
    maxJoke: 9,
  };
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }
  async componentDidMount() {
    let jokes = [];
    console.log(jokes);
    while (jokes.length <= this.props.maxJoke) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }
  render() {
    let jokeLists = this.state.jokes.map((s) => (
      <Joke jokeList={this.state.jokes} />
    ));
    return (
      <div className="jokeList-header">
        <div className="jokeList_left">
          <h2>
            Dad <span>Joke</span>
          </h2>
          <img src={logo} alt="logo" />
          <button>New Jokes</button>
        </div>
        <div className="jokeList"> {jokeLists}</div>
      </div>
    );
  }
}

export default JokeList;
