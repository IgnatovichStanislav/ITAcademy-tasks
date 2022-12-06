import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
import { filterStatusEnum } from "../enums/filterStatusEnum";
import { getId } from "../getId";
import { mapClientsWithSortBy } from "../mapClientsWithSortBy";

const initialState = {
  clients: [...data],
  filteredClients: [...data],
  editClientId: null,
  editClient: null,
  sort: filterStatusEnum.all,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    orderBy: (state, action) => {
      state.sort = action.payload;
      state.filteredClients = mapClientsWithSortBy(action.payload)(
        state.clients
      );
    },
    
    deleteClient: (state, action) => {
      let clients = state.clients.filter((x) => x.id !== action.payload);
      state.clients = clients;
      state.filteredClients = mapClientsWithSortBy(state.sort)(state.clients);
      state.editClientId = null;
      state.editClient = null;
    },

    editClientAction: (state, action) => {
      state.editClientId = action.payload;
      state.editClient = state.clients.find((x) => x.id === action.payload);
    },

    saveClient: (state, action) => {
      let clients = [...state.clients];
      let client = action.payload;
      if (client.id > 0) {
        clients = clients.filter((x) => x.id !== client.id);
      } else {
        client.id = getId(clients);
      }
      clients.push(client);

      state.filteredClients = mapClientsWithSortBy(state.sort)(clients);
      state.clients = clients;
      state.editClientId = null;
    },
  },
});

export const { orderBy, deleteClient, editClientAction, saveClient } =
  clientsSlice.actions;

export default clientsSlice.reducer;
