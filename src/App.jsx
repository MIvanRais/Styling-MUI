import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import OverrideStyle from "./OverrideStyle";
import Slider from "@mui/material/Slider";
import "./App.css";
import EmotionSlider from "./EmotionSlider";
import ManageTheme from "./ManageTheme";
import PrimaryButton from "./PrimaryButton";

function App() {
  return (
    <>
      <OverrideStyle />
      {/* <PrimaryButton>Click Me!</PrimaryButton> */}
      {/* <EmotionSlider/> */}
      {/* <ManageTheme/> */}
    </>
  );
}

export default App;
