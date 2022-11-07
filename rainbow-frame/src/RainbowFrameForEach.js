export const RainbowFrameForEach = (props) => {
  let res;
  props.colors.forEach((el, index) => {
    res = (
      <div
        style={{
          border: "3px solid " + el,
        }}
      >
        {index > 0 ? res : props.children}
      </div>
    );
  });
  return res;
};
