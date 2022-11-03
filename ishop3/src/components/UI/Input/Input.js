import { React, Component } from "react";
import "./Input.css";

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
      <div className="Input">
        <label htmlFor={htmlFor}>
          {this.props.label}{" "}
          {this.props?.validation?.required === true ? <span>*</span> : null}
        </label>
        <input
          type={inputType}
          id={htmlFor}
          value={this.props.value}
          onChange={this.onChange}
          disabled={this.props.disabled}
          name={this.props.name}
        />
        {/* Если потрогали + есть валидация + не валидно*/}
        {this.props.touched && !!this.props.validation && !this.props.valid ? (
          <span>
            {this.props.errorMessages
              ? this.props.errorMessages.join(", ")
              : null}
          </span>
        ) : null}
      </div>
    );
  }
}

export default Input;
