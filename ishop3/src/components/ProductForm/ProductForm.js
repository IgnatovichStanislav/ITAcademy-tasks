import { Component } from "react";
import { productActionTypeEnum } from "../../enums/productActionTypeEnum";
import Input from "../UI/Input/Input";
import { validateFormControl } from "../../services/validateFormControl";

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
          valid: null,
        },
        name: {
          value: props?.name ?? "",
          label: "Name",
          touched: false,
          valid: false,
          errorMessages: [],
          validation: {
            required: true,
          },
        },
        price: {
          value: props?.price ?? "",
          label: "Price",
          touched: false,
          valid: false,
          errorMessages: [],
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
          valid: false,
          errorMessages: [],
          validation: {
            required: true,
          },
        },
        quantity: {
          value: props?.quantity ?? "",
          label: "Quantity",
          touched: false,
          valid: false,
          errorMessages: [],
          validation: {
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
    let controls = { ...this.state.controls };
    let product = {};

    let isFormValid = true;
    Object.keys(controls).forEach((name) => {
      let control = controls[name];
      validateFormControl(control);

      controls[name] = control;
      product[name] = controls[name].value;

      isFormValid = (control.valid === null || control.valid) && isFormValid;
    });

    if (isFormValid) {
      this.props.onSave(product);
    } else {
      this.setState({ controls: controls });
    }
  };

  onInputChange = (name, val) => {
    const controls = { ...this.state.controls };

    let control = controls[name];
    control.value = val;

    validateFormControl(control);

    controls[name] = control;

    let isFormTouched = Object.keys(controls)
      .map((controlName) => controls[controlName])
      .some((x) => x.touched);

    this.setState({ controls, isFormTouched });
  };

  mapInputs() {
    return Object.keys(this.state.controls).map((controlName, index) => {
      let control = this.state.controls[controlName];
      console.log(control);
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
              disabled={!this.state.isFormTouched}
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
