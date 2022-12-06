export function getId(clients) {
  if (!clients.length) return 1;
  
  return (
    clients.reduce((prev, curr) => (prev.id < curr.id ? curr : prev)).id + 1
  );
}
