export default function RainbowFrameReduce(props) {
  let wrapper = props.colors.reduce((current, next) => {
    return <div style={{ border: "3px solid " + next }}>{current}</div>;
  }, props.children);

  return wrapper;
}
