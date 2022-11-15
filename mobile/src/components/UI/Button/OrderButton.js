import Button from "./Button";

export default class OrderButton extends Button {
  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onOrderButtonClick(this.props.sort);
  };
}
