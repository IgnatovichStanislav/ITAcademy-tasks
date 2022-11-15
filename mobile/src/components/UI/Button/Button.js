import React from "react";

export default class Button extends React.PureComponent {
  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClick(e);
  };

  render() {
    console.log("render Button");

    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
}
