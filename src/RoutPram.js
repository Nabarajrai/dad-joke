import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
export class RoutPram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
    };
  }
  async componentDidMount() {
    let name = this.props.match.params.name;
    let url = `  https://api.github.com/users/${name}`;
    let response = await axios.get(url);
    const data = response.data;
    console.log(data);
    this.setState({ imgUrl: data.avatar_url });
  }
  render() {
    let name = this.props.match.params.name;
    if (/\d/.test(name)) this.props.history.push("/notfound");
    return (
      <div>
        {/\d/.test(name) ? (
          <Redirect to="/notfound" />
        ) : (
          <div>
            <h2>Welcome to github searching {name}</h2>
            <img src={this.state.imgUrl} />
          </div>
        )}
      </div>
    );
  }
}

export default RoutPram;
