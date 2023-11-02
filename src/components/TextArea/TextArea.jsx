import React, { Component } from "react";

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      bgColor: this.getRandomColor(),
    };
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


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
