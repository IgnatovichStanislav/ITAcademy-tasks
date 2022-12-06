import OrderButtons from "./UI/OrderButtons";
import { ClientForm } from "./components/ClientForm";
import Client from "./components/Client";
import { editClientAction } from "./redux/clientsSlice.js";
import { useSelector, useDispatch } from "react-redux";

export default function MobileService() {
  const { filteredClients, editClientId, editClient } = useSelector(
    (state) => state.clients
  );

  const dispatch = useDispatch();

  function onAddClientClick() {
    dispatch(editClientAction(0));
  }
  
  console.log("render MobileService");
  return (
    <div className={"MobileService"}>
      <h1>Mobile service</h1>

      <OrderButtons />

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
            <Client key={x.id} data={x} />
          ))}
        </tbody>
      </table>

      <button onClick={onAddClientClick}>Add client</button>

      {editClientId !== null ? (
        <ClientForm key={editClient?.id ?? 0} data={editClient} />
      ) : null}
    </div>
  );
}
