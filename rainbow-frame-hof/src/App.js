import React from "react";
import DoubleButton from "./DoubleButton";
import { withRainbowFrame } from "./withRainbowFrame";
export default class App extends React.Component {
  onCbPressed = (text) => {
    alert(text);
  };

  render() {
    let colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "#00BFFF",
      "blue",
      "purple",
    ];

    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

    return (
      <React.Fragment>
        <DoubleButton
          caption1={"однажды"}
          caption2={"пору"}
          cbPressed={this.onCbPressed}
        >
          в студеную зимнюю
        </DoubleButton>

        <FramedDoubleButton
          caption1="я из лесу"
          caption2="мороз"
          cbPressed={(num) => alert(num)}
        >
          вышел, был сильный
        </FramedDoubleButton>
      </React.Fragment>
    );
  }
}
