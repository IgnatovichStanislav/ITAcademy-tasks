const RainbowFrameFor = (props) => {
  let content = props.children;
  for (let i = 0; i < props.colors.length; i++)
    content = (
      <div style={{ border: "3px solid " + props.colors[i] }}>{content}</div>
    );

  return content;
};

export default RainbowFrameFor;
