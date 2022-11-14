import React from "react";

export const withRainbowFrame = (colors) => (Comp) => {
  return class RainbowFrame extends React.Component {
    render() {
      let content = <Comp {...this.props} />;

      for (let i = 0; i < colors.length; i++)
        content = (
          <div style={{ border: "3px solid " + colors[i] }}>{content}</div>
        );

      return content;
    }
  };
};
