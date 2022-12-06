import React, { useRef } from "react";
import { editClientAction, saveClient } from "../redux/clientsSlice.js";
import { useDispatch } from "react-redux";

export const ClientForm = (props) => {
  const dispatch = useDispatch();

  const firstName = useRef(null);
  const lastName = useRef(null);
  const patronymic = useRef(null);
  const balance = useRef(null);

  function onSaveClick() {
    const balanceData = +balance.current.value;

    const clientData = {
      id: props.data?.id ?? 0,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      patronymic: patronymic.current.value,
      balance: isNaN(balanceData) ? 0 : balanceData,
    };
    dispatch(saveClient(clientData));
  }

  function onCancelClick() {
    dispatch(editClientAction(null));
  }

  return (
    <div className="ProductForm">
      <h3>{props.data ? "Edit client" : "Add client"}</h3>
      <div className={"client-form"}>
        <div className="Input">
          <label htmlFor={"firstName"}>First name</label>
          <input
            type={"text"}
            id={"firstName"}
            defaultValue={props.data?.firstName}
            ref={firstName}
          />
        </div>
        <div className="Input">
          <label htmlFor={"lastName"}>Last name</label>
          <input
            type={"text"}
            id={"lastName"}
            defaultValue={props.data?.lastName}
            ref={lastName}
          />
        </div>
        <div className="Input">
          <label htmlFor={"patronymic"}>Patronymic</label>
          <input
            type={"text"}
            id={"patronymic"}
            defaultValue={props.data?.patronymic}
            ref={patronymic}
          />
        </div>
        <div className="Input">
          <label htmlFor={"balance"}>Balance</label>
          <input
            type={"text"}
            id={"balance"}
            defaultValue={props.data?.balance}
            ref={balance}
          />
        </div>
      </div>
      <div>
        <button onClick={onSaveClick}>{props.data ? "Save" : "Add"}</button>
        <button onClick={onCancelClick}>Cancel</button>
      </div>
    </div>
  );
};
