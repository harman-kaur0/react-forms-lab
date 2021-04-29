import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: this.props.maxChars,
      input: "",
    };
  }

  updateChars = (e) => {
    this.setState({
      chars: this.state.chars - 1,
      input: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.input}
          onChange={(event) => this.updateChars(event)}
          type="text"
          name="message"
          id="message"
        />
        <p>{this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
