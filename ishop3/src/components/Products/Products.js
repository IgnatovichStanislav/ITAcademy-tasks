import { Component, Fragment } from "react";
import Product from "../Product/Product";
import ProductForm from "../ProductForm/ProductForm";
import "./Products.css";

class Products extends Component {
  state = {
    products: this.props.products,
    activeProduct: null,
  };

  onProductSelect = (id) => {
    var product = this.state.products.find((x) => x.id === id);
    if (product) {
      this.setState({
        activeProduct: {
          product,
          viewmode: true,
        },
      });
    } else {
      this.setState({
        activeProduct: null,
      });
    }
  };

  onRemoveProduct = (id) => {
    var product = this.state.products.find((x) => x.id === id);
    if (
      product &&
      window.confirm("Are you sure wnt to delete product: " + product.name)
    ) {
      var products = [...this.state.products];
      products = products.filter((x) => x.id !== product.id);
      this.setState({ products: products });
      
      if (product.id === this.state.activeProduct.product.id)
        this.setState({
          activeProduct: null,
        });
    }
  };

  render() {
    var products = this.state.products.map((x) => (
      <Product
        key={x.id}
        product={x}
        selected={this.state?.activeProduct?.product?.id === x.id}
        onProductSelect={this.onProductSelect}
        onRemoveProduct={this.onRemoveProduct}
      />
    ));

    return (
      <Fragment>
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
        {this.state.activeProduct ? (
          <ProductForm activeProduct={this.state.activeProduct} />
        ) : null}
      </Fragment>
    );
  }
}

export default Products;
