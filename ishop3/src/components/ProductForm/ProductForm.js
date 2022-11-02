import { Component } from "react";
import { productActionTypeEnum } from "../../enums/productActionTypeEnum";
import Input from "../UI/Input/Input";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.createFormState(props);
  }
  componentWillReceiveProps(props) {
    this.setState(this.createFormState(props));
  }

  createFormState = (props) => {
    return {
      mode: props.mode,
      id: props?.id ?? 0,
      isFormTouched: false,
      isFormValid: false,
      controls: {
        id: {
          value: props?.id ?? "",
          label: "Id",
          disabled: true,
          touched: null,
          valid: false,
        },
        name: {
          value: props?.name ?? "",
          label: "Name",
          touched: false,
          valid: false,
          validation: {
            required: true,
          },
        },
        price: {
          value: props?.price ?? "",
          label: "Price",
          touched: false,
          validation: {
            required: true,
            isNumber: true,
            positive: true,
          },
        },
        url: {
          value: props?.url ?? "",
          label: "Url",
          touched: false,
          validation: {
            required: true,
            isUrl: true,
          },
        },
        quantity: {
          value: props?.quantity ?? "",
          label: "Quantity",
          touched: false,
          validation: {
            required: true,
            isInteger: true,
            positive: true,
          },
        },
      },
    };
  };

  onCancelClick = () => {
    this.props.onCancel();
  };

  onSaveClick = () => {
    let product = {};

    Object.keys(this.state.controls).forEach((controlName, index) => {
      product[controlName] = this.state.controls[controlName].value;
    });

    this.props.onSave(product);
  };

  onInputChange = (name, val) => {
    const controls = { ...this.state.controls };

    let control = controls[name];
    control.value = val;
    if (control.touched !== null) control.touched = true;
    controls[name] = control;

    let isFormTouched = Object.keys(controls)
      .map((controlName) => controls[controlName])
      .some((x) => x.touched);

    this.setState({ controls, isFormTouched });
  };

  mapInputs() {
    return Object.keys(this.state.controls).map((controlName, index) => {
      let control = this.state.controls[controlName];
      return (
        <Input
          key={controlName + index}
          name={controlName}
          {...control}
          disabled={
            control.disabled === true ||
            this.props.mode === productActionTypeEnum.view
          }
          onChange={this.onInputChange}
        />
      );
    });
  }
  render() {
    let inputs = this.mapInputs();

    return (
      <div className="ProductForm">
        {this.props.mode !== productActionTypeEnum.view ? (
          <h3>
            {this.props.mode === productActionTypeEnum.edit
              ? "Edit product"
              : "Add product"}
          </h3>
        ) : null}

        {inputs}

        {this.props.mode !== productActionTypeEnum.view ? (
          <div>
            <button
              disabled={
                // !this.state.isFormValid ||
                !this.state.isFormTouched
              }
              onClick={this.onSaveClick}
            >
              {this.props.mode === productActionTypeEnum.edit ? "Save" : "Add"}
            </button>
            <button onClick={this.onCancelClick}>Cancel</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ProductForm;
