import { Component, Fragment } from "react";
import Product from "./Product/Product";
import ProductForm from "../ProductForm/ProductForm";
import "./Products.css";
import { productActionTypeEnum } from "../../enums/productActionTypeEnum";
import { getId } from "../../services/getId";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      activeProduct: null,
    };

    this.onAddProductClick = this.onAddProductClick.bind(this);
  }

  onProductSelect = (id) => {
    if (this.state?.activeProduct?.mode === productActionTypeEnum.add) return;
    else if (
      this.state?.activeProduct?.mode === productActionTypeEnum.edit &&
      !true ///todo:edit - если в редактируемую сейчас карточку не были внесены изменения, иначе клик игнорируется
    ) {
      return;
    } else {
      let product = this.state.products.find((x) => x.id === id);
      if (product) {
        this.setState({
          activeProduct: {
            selectedProductId: product.id,
            mode: productActionTypeEnum.view,
          },
        });
      } else {
        this.setState({
          activeProduct: null,
        });
      }
    }
  };

  onCancelEditProduct = () => {
    this.setState({
      activeProduct: null,
    });
  };

  onSaveProduct = (product) => {
    let products = this.state.products;
    if (product.id) {
      products = products.filter((x) => x.id !== product.id);
    } else {
      product.id = getId(products);
    }
    products.push(product);

    this.setState({
      products,
      activeProduct: {
        selectedProductId: product.id,
        mode: productActionTypeEnum.view,
      },
    });
  };

  onAddProductClick(e) {
    this.setState({
      activeProduct: {
        selectedProductId: null,
        mode: productActionTypeEnum.add,
      },
    });
  }

  onEditProduct = (id) => {
    let product = this.state.products.find((x) => x.id === id);
    if (product)
      this.setState({
        activeProduct: {
          selectedProductId: product.id,
          mode: productActionTypeEnum.edit,
        },
      });
  };

  onRemoveProduct = (id) => {
    let product = this.state.products.find((x) => x.id === id);
    if (
      product &&
      window.confirm("Are you sure wnt to delete product: " + product.name)
    ) {
      let products = this.state.products.filter((x) => x.id !== product.id);
      this.setState({ products: products });

      if (product.id === this.state.activeProduct.selectedProductId)
        this.setState({
          activeProduct: null,
        });
    }
  };

  render() {
    let activeProduct = this.state.products.find(
      (x) => x.id === this.state?.activeProduct?.selectedProductId
    );

    let products = this.state.products
      .sort((a, b) => a.id - b.id)
      .map((x) => (
        <Product
          key={x.id}
          product={x}
          selected={activeProduct?.id === x.id}
          onProductSelect={this.onProductSelect}
          onRemoveProduct={this.onRemoveProduct}
          onEditProduct={this.onEditProduct}
          mode={this.state?.activeProduct?.mode ?? productActionTypeEnum.view}
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

        {this.state?.activeProduct === null ||
        this.state.activeProduct.mode === productActionTypeEnum.view ? (
          <button onClick={this.onAddProductClick}>New product</button>
        ) : null}

        {this.state?.activeProduct ? (
          <ProductForm
            {...activeProduct}
            mode={this.state?.activeProduct?.mode}
            onCancel={this.onCancelEditProduct}
            onSave={this.onSaveProduct}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default Products;
