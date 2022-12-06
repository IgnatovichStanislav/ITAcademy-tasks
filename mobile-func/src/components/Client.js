import React, { memo } from "react";

const Client = (props) => {
  function onRemoveButtonClick(e) {
    e.stopPropagation();
    props.onDeleteClient(props.data.id);
  }

  function onEditButtonClick(e) {
    e.stopPropagation();
    props.onEditClient(props.data.id);
  }

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
