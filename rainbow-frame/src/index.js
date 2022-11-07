import React from "react";
import ReactDOM from "react-dom/client";
import RainbowFrameReduce from "./RainbowFrameReduce";
import RainbowFrameFor from "./RainbowFrameFor";
import { RainbowFrameForEach } from "./RainbowFrameForEach";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "#00BFFF",
  "blue",
  "purple",
];

root.render(
  <React.StrictMode>
    
    <RainbowFrameReduce colors={colors}>
      Hello RainbowFrameReduce!
    </RainbowFrameReduce>

    <RainbowFrameFor colors={colors}>Hello RainbowFrameFor!</RainbowFrameFor>

    <RainbowFrameForEach colors={colors}>
      Hello RainbowFrameForEach!
    </RainbowFrameForEach>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
