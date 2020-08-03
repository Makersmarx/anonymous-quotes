import React, { Component } from "react"

class AddQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
    }
  }

  handleChange = (value) => {
    this.setState({ quote: value })
  }

  saveQuote = () => {
    this.props.addQuote(this.state.quote)
    this.setState({ quote: '' })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.quote}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={this.saveQuote}>Insert Quote</button>
      </div>
    )
  }
}

export default AddQuote