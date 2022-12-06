import { useEffect, useState } from "react";
import OrderButton from "./UI/OrderButton";
import { filterStatusEnum } from "./enums/filterStatusEnum";
import { mapClientsWithSortBy } from "./mapClientsWithSortBy";
import { ClientForm } from "./components/ClientForm";
import Client from "./components/Client";
import { getId } from "./getId";

export default function MobileService(props) {
  const [clients, setClients] = useState(props.data);//контейнер данных
  const [filteredClients, setFilteredClients] = useState([]);//отфильтрованные данные через useEffect

  const [editClientId, setEditClientId] = useState(null);
  const [editClient, setEditClient] = useState(null);

  const [sort, setSort] = useState(filterStatusEnum.all);

  useEffect(() => {
    let filteredClients = mapClientsWithSortBy(sort)(clients);
    setFilteredClients(filteredClients);

    let editClient = clients.find((x) => x.id === editClientId);
    setEditClient(editClient);
  }, [clients, sort, editClientId]);

  function onEditClient(id) {
    setEditClientId(id);
  }

  function onDeleteClient(id) {
    let clonedClients = clients.filter((x) => x.id !== id);
    setClients(clonedClients);
    setEditClientId(null);
  }

  function onOrderClick(sort) {
    setSort(sort);
  }

  function onAddClientClick() {
    setEditClientId(0);
  }

  function onSaveClient(client) {
    let clonedClients = [...clients];
    if (client.id > 0) {
      clonedClients = clonedClients.filter((x) => x.id !== client.id);
    } else {
      client.id = getId(clonedClients);
    }
    clonedClients.push(client);

    setClients(clonedClients);
    setEditClientId(null);
  }

  function onCancelClientEdit() {
    setEditClientId(null);
  }

  return (
    <div className={"MobileService"}>
      <h1>Mobile service</h1>
      <div className={"sort-clients-buttons"}>
        <OrderButton onOrderClick={onOrderClick} sort={filterStatusEnum.all}>
          All
        </OrderButton>
        <OrderButton onOrderClick={onOrderClick} sort={filterStatusEnum.active}>
          Active
        </OrderButton>
        <OrderButton
          onOrderClick={onOrderClick}
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
        <tbody>
          {filteredClients.map((x) => (
            <Client
              key={x.id}
              data={x}
              onEditClient={onEditClient}
              onDeleteClient={onDeleteClient}
            />
          ))}
        </tbody>
      </table>

      <button onClick={onAddClientClick}>Add client</button>

      {editClientId !== null ? (
        <ClientForm
          key={editClient?.id ?? 0}
          data={editClient}
          onSaveClient={onSaveClient}
          onCancelClientEdit={onCancelClientEdit}
        />
      ) : null}
    </div>
  );
}
