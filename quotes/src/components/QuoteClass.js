import React, { Component } from "react";

class QuoteClass extends Component {
  constructor(props) {
    super(props);
    const { quote } = this.props.info;
    this.state = {
      edit: false,
      quote: quote,
    };
  }

  handleChange = (value) => {
    this.setState({ quote: value });
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  saveQuote = () => {
    this.props.editQuote(this.props.info.id, this.state.quote);
    this.toggleEdit();
  };

  render() {
    return (
      <div className="quotes">
        {this.state.edit ? (
          <div>
            <input
              value={this.state.quote}
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <button onClick={this.toggleEdit}>Cancel</button>
            <button onClick={this.saveQuote}>Keep</button>
          </div>
        ) : (
          <div className="bodyquoteone">
            <h2>{this.props.info.quote}</h2>
            <button className="leftbutton" onClick={this.toggleEdit}>
              Change
            </button>
            <button
              className="rightbutton"
              onClick={() => this.props.deleteQuote(this.props.info.id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default QuoteClass;
