import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
export class inputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      lastname: "",
    };
  }
  handleChang = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleClick = () => {
    alert("Save data to database");
    this.props.history.push(`/route/${this.state.query}`);
  };
  render() {
    return (
      <div>
        <h1>Search Input field</h1>
        <input
          type="text"
          ref="query"
          name="query"
          value={this.state.query}
          onChange={this.handleChang}
        />
        <Link to={`/route/${this.state.query}`}>Go</Link>
        <button onClick={this.handleClick}>Save data to database!</button>
      </div>
    );
  }
}

export default inputSearch;
