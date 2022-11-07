const RainbowFrameFor = (props) => {
  let wrapper;
  for (let i = 0; i < props.colors.length; i++) {
    wrapper = (
      <div
        style={{
          border: "3px solid " + props.colors[i],
        }}
      >
        {i > 0 ? wrapper : props.children}
      </div>
    );
  }

  return wrapper;
};

export default RainbowFrameFor;
