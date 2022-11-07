export default function RainbowFrameReduce(props) {
  let wrapper = props.colors.reduce(
    (current, next, index, arr) => {
      return (
        <div
          style={{
            border: "3px solid " + next,
          }}
        >
          {current}
        </div>
      );
    },
    <div
      style={{
        border: "3px solid " + props[0],
      }}
    >
      {props.children}
    </div>
  );

  return wrapper;
}
