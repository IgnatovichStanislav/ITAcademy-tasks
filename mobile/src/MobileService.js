import React from "react";
import OrderButton from "./components/UI/Button/OrderButton";
import Button from "./components/UI/Button/Button";
// import { clientActionTypeEnum } from "./../enums/clientActionTypeEnum";
import { filterStatusEnum } from "./enums/filterStatusEnum";
import { mapClientsWithSortBy } from "./mappers/mapClientsWithSortBy";
import ClientForm from "./components/ClientForm/ClientForm";
import { editClientFormEvents, onManageClientEvents } from "./events";
import { getId } from "./getId";

export default class MobileService extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editClientId: null,
      clients: [...props.data],
      sort: filterStatusEnum.all,
    };

    editClientFormEvents.on("onSaveClient", this.onSaveClient);
    editClientFormEvents.on("onCancelClientEdit", this.onCancelClientEdit);

    onManageClientEvents.on("onDeleteClient", this.onDeleteClient);
    onManageClientEvents.on("onEditClient", this.onEditClient);
  }
  displayName = "MobileService";

  onEditClient = (id) => {
    this.setState({ editClientId: id });
  };
  
  onDeleteClient = (id) => {
    let client = this.state.clients.find((x) => x.id === id);
    let clients = this.state.clients.filter((x) => x.id !== client.id);
    this.setState({ clients: clients, editClientId: null });
  };

  onSaveClient = (client) => {
    let clients = [...this.state.clients];
    if (client.id > 0) {
      clients = clients.filter((x) => x.id !== client.id);
    } else {
      client.id = getId(clients);
    }
    clients.push(client);
    this.setState({
      clients,
      editClientId: null,
    });
  };

  onCancelClientEdit = () => {
    this.setState({ editClientId: null });
  };

  onOrderButtonClick = (sort) => {
    this.setState({ sort: sort });
  };

  onAddClientClick = () => {
    this.setState({ editClientId: 0 });
  };

  render() {
    console.log("render MobileService");

    let clients = mapClientsWithSortBy(this.state.sort)([
      ...this.state.clients,
    ]);

    let editClient = this.state.clients.find(
      (x) => x.id === this?.state?.editClientId
    );

    return (
      <div className={"MobileService"}>
        <h1>Mobile service</h1>
        <div className={"sort-clients-buttons"}>
          <OrderButton
            onOrderButtonClick={this.onOrderButtonClick}
            sort={filterStatusEnum.all}
          >
            All
          </OrderButton>
          <OrderButton
            onOrderButtonClick={this.onOrderButtonClick}
            sort={filterStatusEnum.active}
          >
            Active
          </OrderButton>
          <OrderButton
            onOrderButtonClick={this.onOrderButtonClick}
            sort={filterStatusEnum.blocked}
          >
            Blocked
          </OrderButton>
        </div>
        <table className="Clients">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Patronymic</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{clients}</tbody>
        </table>
        <Button onClick={this.onAddClientClick}>Add client</Button>
        {this.state?.editClientId !== null ? (
          <ClientForm key={editClient?.id ?? 0} data={editClient} />
        ) : null}
      </div>
    );
  }
}
