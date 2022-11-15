import React from "react";
import { onManageClientEvents } from "../../events";

export default class Client extends React.PureComponent {
    displayName = "Client";

  onRemoveButtonClick = (e) => {
    e.stopPropagation();
    onManageClientEvents.emit('onDeleteClient',this.props.data.id)
  };

  onEditButtonClick = (e) => {
    e.stopPropagation();
    onManageClientEvents.emit('onEditClient',this.props.data.id)
  };

  render() {
    console.log("render Client")

    return (
      <tr className={`Client ${this.props.selected ? "selected" : ""}`}>
        <td>{this.props.data.firstName}</td>
        <td>{this.props.data.lastName}</td>
        <td>{this.props.data.patronymic}</td>
        <td>{this.props.data.balance}</td>
        <td className={this.props.data.balance > 0 ? "active" : "blocked"}>
          {this.props.data.balance > 0 ? "active" : "blocked"}
        </td>
        <td>
          <button onClick={this.onEditButtonClick}>Edit</button>
        </td>
        <td>
          <button onClick={this.onRemoveButtonClick}>Delete</button>
        </td>
      </tr>
    );
  }
}
