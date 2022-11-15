import React from "react";
import { editClientFormEvents } from "../../events";

import PropTypes from "prop-types";

class ClientForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.patronymic = React.createRef();
    this.balance = React.createRef();
  }

  displayName = "ClientForm";

  onSaveClick = () => {
    const balance = +this.balance.current.value;
    const clientData = {
      id: this.props.data?.id ?? 0,
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      patronymic: this.patronymic.current.value,
      balance: isNaN ? 0 : balance,
    };

    editClientFormEvents.emit("onSaveClient", clientData);
  };

  onCancelClick = () => {
    editClientFormEvents.emit("onCancelClientEdit");
  };

  render() {
    console.log("render ClientForm");

    return (
      <div className="ProductForm">
        <h3>{this.props.data ? "Edit client" : "Add client"}</h3>
        <div className={"client-form"}>
          <div className="Input">
            <label htmlFor={"firstName"}>First name</label>
            <input
              type={"text"}
              id={"firstName"}
              defaultValue={this.props.data?.firstName}
              ref={this.firstName}
            />
          </div>
          <div className="Input">
            <label htmlFor={"lastName"}>Last name</label>
            <input
              type={"text"}
              id={"lastName"}
              defaultValue={this.props.data?.lastName}
              ref={this.lastName}
            />
          </div>
          <div className="Input">
            <label htmlFor={"patronymic"}>Patronymic</label>
            <input
              type={"text"}
              id={"patronymic"}
              defaultValue={this.props.data?.patronymic}
              ref={this.patronymic}
            />
          </div>
          <div className="Input">
            <label htmlFor={"balance"}>Balance</label>
            <input
              type={"text"}
              id={"balance"}
              defaultValue={this.props.data?.balance}
              ref={this.balance}
            />
          </div>
        </div>
        <div>
          <button onClick={this.onSaveClick}>
            {this.props.data ? "Save" : "Add"}
          </button>
          <button onClick={this.onCancelClick}>Cancel</button>
        </div>
      </div>
    );
  }
}

ClientForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    patronymic: PropTypes.string,
    balance: PropTypes.number,
  }),
};

export default ClientForm;
