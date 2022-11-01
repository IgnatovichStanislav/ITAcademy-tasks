import { React, Component } from "react";

class Input extends Component {
  render() {
    const inputType = this.props.type || "text";
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
      <div className="form-group">
        <label htmlFor={htmlFor}>{this.props.label}</label>
        <input
          type={inputType}
          id={htmlFor}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;
