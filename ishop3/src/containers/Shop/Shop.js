import React, { Component } from "react";
import Products from "../../components/Products/Products";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }

  render() {
    return (
      <div className="Shop">
        <Products onProductSelect={this.onProductSelect} products={this.props.products} />
      </div>
    );
  }
}

export default Shop;
