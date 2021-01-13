import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleClick = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleClick}>
          <div className="field">
            <label style={{ textAlign: "center" }}>Search Image</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
