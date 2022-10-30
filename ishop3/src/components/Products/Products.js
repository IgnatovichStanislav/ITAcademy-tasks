import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  state = {
    products: this.props.products,
    selectedProductId: null,
  };

  onProductSelect = (id) => {
    this.setState({ selectedProductId: id });
  };

  onRemoveProduct = (id) => {
    var product = this.state.products.find(x => x.id === id);
    if (product && window.confirm('Are you sure wnt to delete product: ' + product.name)) {
        var products = [...this.state.products];
        products = products.filter(x => x.id !== product.id)
        this.setState({ products: products });
    }
  };

  render() {
    var products = this.state.products.map((x) => (
      <Product
        key={x.id}
        product={x}
        selected={this.state.selectedProductId === x.id}
        onProductSelect={this.onProductSelect}
        onRemoveProduct={this.onRemoveProduct}
      />
    ));

    //     {/* {this.state.activeProduct?:null} */}

    return (
      <table className="Products">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>URL</th>
            <th>Quantity</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    );
  }
}

export default Products;
