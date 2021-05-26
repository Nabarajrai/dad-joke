import React, { Component } from "react";
import axios from "axios";

export class githubuser extends Component {
  constructor(props) {
    super(props);
    this.state = { fimgUrl: "", simgUrl: "" };
  }
  async componentDidMount() {
    let names = this.props.match.params.name;
    let url = `  https://api.github.com/users/${names}`;
    let response = await axios.get(url);
    const data = response.data;
    console.log(data);
    this.setState({ fimgUrl: data.avatar_url });
  }
  render() {
    const secondgetName = this.props.match.params.getname;
    const firstgetName = this.props.match.params.name;

    return (
      <div>
        <h2>
          This is {firstgetName} and {secondgetName}
        </h2>
        <img src={this.state.fimgUrl} alt={firstgetName} />
        <img src={this.state.simgUrl} alt={secondgetName} />
      </div>
    );
  }
}

export default githubuser;
