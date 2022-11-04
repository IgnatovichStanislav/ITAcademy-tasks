import { Component } from "react";
import "./Product.css";
import { productActionTypeEnum } from "../../../enums/productActionTypeEnum";

class Product extends Component {
  constructor(props) {
    super(props);
    this.onRowClick = this.onRowClick.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
  }
  onRowClick(e) {
    this.props.onProductSelect(
      !this.props.selected ? this.props.product.id : null
    );
  }

  onEditButtonClick(e) {
    e.stopPropagation();
    this.props.onEditProduct(this.props.product.id);
  }

  onRemoveButtonClick = (e) => {
    e.stopPropagation();
    this.props.onRemoveProduct(this.props.product.id);
  };

  render() {
    return (
      <tr
        className={`Product ${this.props.selected ? "selected" : ""}`}
        onClick={this.onRowClick}
      >
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.url}</td>
        <td>{this.props.product.quantity}</td>
        <td>
          <button
            disabled={
              this.props.mode === productActionTypeEnum.add ||
              this.props.isFormChanged
            }
            onClick={this.onEditButtonClick}
          >
            Edit
          </button>
          <button
            disabled={
              this.props.mode || this.props.mode !== productActionTypeEnum.view
            }
            onClick={this.onRemoveButtonClick}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Product;
