export function getId(clients) {
  return (
    clients.reduce((prev, curr) => (prev.id < curr.id ? curr : prev)).id + 1
  );
}
