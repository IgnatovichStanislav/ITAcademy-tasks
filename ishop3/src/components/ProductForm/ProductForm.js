import { Component } from "react";
import { productActionTypeEnum } from "../../enums/productActionTypeEnum";

import Input from "../UI/Input/Input";

class ProductForm extends Component {
  mapViewModeData(product) {
    return Object.keys(product).map((productProp, index) => {
      var productPropData = product[productProp];
      return (
        <div key={productPropData + index}>
          <span>{productProp}:</span>
          <span>{productPropData}</span>
        </div>
      );
    });
  }

  onCancelClick = () => {
    this.props.onCancel();
  };

  onSaveClick = () => {
    console.log("onSaveClick");
  };

  onInputChange = () => {
    console.log("onInputChange");
  };

  render() {
    if (this.props.mode === productActionTypeEnum.view) {
      var productInfo = this.mapViewModeData(this.props.product);
      return <div className="ProductForm">{productInfo}</div>;
    }

    return (
      <div className="ProductForm">
        <h3>
          {this.props.mode === productActionTypeEnum.edit
            ? "Edit product"
            : "Add product"}
        </h3>
        <div className="form">
          {this.props.mode === productActionTypeEnum.edit ? (
            <div className="form-group">
              <span>ID:</span>
              <span>{this.props.product.id}</span>
            </div>
          ) : null}

          <Input
            type="text"
            value={this.props.product?.name}
            onChange={this.onInputChange}
            label="name"
          />
          <Input
            type="text"
            value={this.props.product?.price}
            onChange={this.onInputChange}
            label="price"
          />
          <Input
            type="text"
            value={this.props.product?.url}
            onChange={this.onInputChange}
            label="url"
          />
          <Input
            type="text"
            value={this.props.product?.quantity}
            onChange={this.onInputChange}
            label="quantity"
          />

          <button onClick={this.onSaveClick}>
            {this.props.mode === productActionTypeEnum.edit ? "Save" : "Add"}
          </button>
          <button onClick={this.onCancelClick}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default ProductForm;
