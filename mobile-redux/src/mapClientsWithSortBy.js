import { filterStatusEnum } from "./enums/filterStatusEnum";

export const mapClientsWithSortBy = (sort) => (clients) => {
    
  switch (sort) {
    case filterStatusEnum.active:
      clients = clients.filter((x) => x.balance > 0);
      break;
    case filterStatusEnum.blocked:
      clients = clients.filter((x) => x.balance <= 0);
      break;
    case filterStatusEnum.all:
    default:
        clients=[...clients]
      break;
  }

  return clients;
};
