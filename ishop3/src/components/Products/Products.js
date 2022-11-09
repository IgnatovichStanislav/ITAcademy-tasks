import { Component, Fragment } from "react";
import Product from "./Product/Product";
import ProductForm from "../ProductForm/ProductForm";
import "./Products.css";
import { productActionTypeEnum } from "../../enums/productActionTypeEnum";
import { getId } from "../../services/getId";
import { globalEvents } from "../../services/globalEvents";

class Products extends Component {
  constructor(props) {
    super(props);
    let products = [...this.props.products];
    products.sort((a, b) => a.id - b.id);

    this.state = {
      products: products,
      activeProduct: null,
    };

    this.onAddProductClick = this.onAddProductClick.bind(this);

    globalEvents.on("onFormChanged", this.onFormChanged);
  }

  onProductSelect = (id) => {
    if (this.state?.activeProduct?.mode === productActionTypeEnum.add) return;
    else if (
      this.state?.activeProduct?.mode === productActionTypeEnum.edit &&
      this.state?.activeProduct?.isFormChanged === true ///todo:edit - если в редактируемую сейчас карточку не были внесены изменения, иначе клик игнорируется
    ) {
      return;
    } else {
      let product = this.state.products.find((x) => x.id === id);
      if (product) {
        this.setState({
          activeProduct: {
            isFormChanged: false,
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
    let products = [...this.state.products];
    if (product.id) {
      products = products.filter((x) => x.id !== product.id);
    } else {
      product.id = getId(products);
    }
    products.push(product);
    products.sort((a, b) => a.id - b.id);
    this.setState({
      products,
      activeProduct: {
        isFormChanged: false,
        selectedProductId: product.id,
        mode: productActionTypeEnum.view,
      },
    });
  };

  onFormChanged = () => {
    console.log("onFormChanged")
    if (!!this.state.activeProduct) {
      let activeProduct = { ...this.state.activeProduct };
      activeProduct.isFormChanged = true;
      this.setState({ activeProduct });
    }
  };

  onAddProductClick(e) {
    this.setState({
      activeProduct: {
        isFormChanged: false,
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
          isFormChanged: false,
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

      if (product.id === this.state?.activeProduct?.selectedProductId)
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
      // .sort((a, b) => a.id - b.id)
      .map((x) => (
        <Product
          key={x.id}
          product={x}
          selected={activeProduct?.id === x.id}
          isFormChanged={this.state?.activeProduct?.isFormChanged ?? false}
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
            key={1}
            {...activeProduct}
            mode={this.state?.activeProduct?.mode}
            onCancel={this.onCancelEditProduct}
            onSave={this.onSaveProduct}
            // onFormChanged={this.onFormChanged}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default Products;
