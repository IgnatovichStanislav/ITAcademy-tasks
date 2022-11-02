export function getId(products) {
  var arr = products.map((x) => x.id);
  return Math.max(...arr) + 1;
}
