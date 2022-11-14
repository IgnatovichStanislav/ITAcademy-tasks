import React from "react";

export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onSecondButtonClick = this.onSecondButtonClick.bind(this);
  }

  onFirstButtonClick = (e) => {
    this.props.cbPressed(this.props.caption1);
  };

  onSecondButtonClick(e) {
    this.props.cbPressed(this.props.caption2);
  }

  render() {
    return (
      <div>
        <button onClick={this.onFirstButtonClick}>{this.props.caption1}</button>
        {this.props.children}
        <button onClick={this.onSecondButtonClick}>
          {this.props.caption2}
        </button>
      </div>
    );
  }
}
