import React, { Component } from "react";
import axios from "axios";
import QuoteClass from "./QuoteClass";
import AddQuote from "./AddQuote";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    axios
      .get("/api/quotes")
      .then((response) => {
        this.setState({ quotes: response.data });
      })
      .catch((err) => console.log(err));
  };

  addQuote = (quote) => {
    axios
      .post("/api/quotes", { quote })
      .then((response) => {
        this.setState({ quotes: response.data });
      })
      .catch((err) => console.log(err));
  };

  editQuote = (id, quote) => {
    axios
      .put(`/api/quotes/${id}`, { quote })
      .then((response) => {
        this.setState({ quotes: response.data });
      })
      .catch((err) => console.log(err));
  };

  deleteQuote = (id) => {
    axios
      .delete(`/api/quotes/${id}`)
      .then((response) => {
        this.setState({ quotes: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <header>
          <h1 className="title">Anonymous Quotes</h1>
        </header>
        <div className="add">
          <h2 className="voice">Your Voice ==></h2>
          <AddQuote addQuote={this.addQuote} />
        </div>
        {this.state.quotes.map((element) => {
          return (
            <QuoteClass
              info={element}
              key={element.id}
              deleteQuote={this.deleteQuote}
              editQuote={this.editQuote}
            />
          );
        })}
      </div>
    );
  }
}

export default Quotes;
