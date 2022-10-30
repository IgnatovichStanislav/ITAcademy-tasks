import { Component } from "react";

class ProductForm extends Component {
    
  mapViewModeData(product) {
    return Object.keys(product).map((productProp, index) => {
      var productPropData = product[productProp];
      return (
        <div>
          <span>{productProp}:</span>
          <span>{productPropData}</span>
        </div>
      );
    });
  }
  render() {
    if (this.props.activeProduct.viewmode) {
      var productInfo = this.mapViewModeData(this.props.activeProduct.product);

      return <div className="ProductForm">{productInfo}</div>;
    }
    return <div className="ProductForm">Edit</div>;
  }
}

export default ProductForm;
