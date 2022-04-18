import "./scss/toggleMode.scss";
import { useContext } from "react";
import { ColorModeContext } from "./context/ColorModeProvider";

export const ToggleMode = () => {
  const { colorMode, changeColorMode } = useContext(ColorModeContext);

  return (
    <div className={`toggle-mode ${colorMode ? "active" : ""}`}>
      <div>
        <input type="checkbox" id="colorModeID" onChange={changeColorMode} />
        <label htmlFor="colorModeID" />
      </div>
    </div>
  );
};
