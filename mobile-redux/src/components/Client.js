import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteClient, editClientAction } from "../redux/clientsSlice.js";

const Client = (props) => {
  const dispatch = useDispatch();

  function onRemoveButtonClick(e) {
    e.stopPropagation();
    dispatch(deleteClient(props.data.id));
  }

  function onEditButtonClick(e) {
    e.stopPropagation();
    dispatch(editClientAction(props.data.id));
  }
  console.log("render Client");
  return (
    <tr className={`Client ${props.data.selected ? "selected" : ""}`}>
      <td>{props.data.firstName}</td>
      <td>{props.data.lastName}</td>
      <td>{props.data.patronymic}</td>
      <td>{props.data.balance}</td>
      <td className={props.data.balance > 0 ? "active" : "blocked"}>
        {props.data.balance > 0 ? "active" : "blocked"}
      </td>
      <td>
        <button onClick={onEditButtonClick}>Edit</button>
      </td>
      <td>
        <button onClick={onRemoveButtonClick}>Delete</button>
      </td>
    </tr>
  );
};

export default memo(Client);
