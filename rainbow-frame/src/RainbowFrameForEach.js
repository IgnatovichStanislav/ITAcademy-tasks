export const RainbowFrameForEach = (props) => {
  let res = props.children;
  props.colors.forEach((el) => {
    res = <div style={{ border: "3px solid " + el }}>{res}</div>;
  });
  return res;
};
