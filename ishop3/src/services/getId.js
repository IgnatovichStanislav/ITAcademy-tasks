export function getId(products) {
  return (
    products.reduce((prev, curr) => (prev.id < curr.id ? curr : prev)).id + 1
  );
}
