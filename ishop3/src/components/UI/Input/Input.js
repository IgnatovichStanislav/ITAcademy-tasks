import { React, Component } from "react";

class Input extends Component {
  onChange = (e) => {
    let name = e.target.getAttribute("name");
    let val = e.target.value;
    this.props.onChange(name, val);
  };
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
          onChange={this.onChange}
          disabled={this.props.disabled}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
