import { Component } from "react";
import "./Product.css";

class Product extends Component {
  onRowClick(e) {
    this.props.onProductSelect(
      !this.props.selected ? this.props.product.id : null
    );
  }

  onRemoveButtonClick(e) {
    e.stopPropagation();
    this.props.onRemoveProduct(this.props.product.id);
  }

  render() {
    return (
      <tr
        className={`Product ${this.props.selected ? "selected" : ""}`}
        onClick={(e) => this.onRowClick(e)}
      >
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.url}</td>
        <td>{this.props.product.quantity}</td>
        <td>
          <button onClick={(e) => {this.onRemoveButtonClick(e)}}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Product;
