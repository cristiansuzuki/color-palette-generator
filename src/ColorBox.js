import React, { Component } from "react";
import "./ColorBox.css";

// digitar 'imrc' para importar o React pela lib React-Native-Snippets

// digitar 'ccc' para criar a classe pela lib React-Native-Snippets

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.generateColor(),
    };
  }
  generateColor = () => {
    let r = this.generateRandomRGB();
    let g = this.generateRandomRGB();
    let b = this.generateRandomRGB();
    return `rgb(${r},${g},${b})`;
  };
  generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  };
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.state.color }}>
        <div className="ColorBox-ColorName">{this.state.color}</div>
      </div>
    );
  }
}

export default ColorBox;
