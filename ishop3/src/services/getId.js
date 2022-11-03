export function getId(products) {
  return (
    products
      .map((x) => x.id)
      .reduce((prev, curr) => (prev < curr ? curr : prev)) + 1
  );
}
