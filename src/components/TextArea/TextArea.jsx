import React, { Component } from "react";

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      bgColor: this.getRandomColor(),
    };
  }

 

  handleChange = (event) => {
    const newText = event.target.value;
    const bgColor = this.getRandomColor();

    this.setState({
      text: newText,
      bgColor: bgColor,
    });
  };

  render() {
    const { text, bgColor } = this.state;

    return (
      <div>
        <textarea
          value={text}
          onChange={this.handleChange}
          placeholder="Type something..."
          rows="5"
          cols="30"
          style={{ backgroundColor: bgColor }}
        />
      </div>
    );
  }
}

export default Textarea;
