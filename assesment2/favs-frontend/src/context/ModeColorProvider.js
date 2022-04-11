import { createContext, useMemo, useState } from "react";

export const ModeColorContext = createContext({});

export const ModeColorProvider = ({ children }) => {
  const [modeColor, setModeColor] = useState(() => {
    const darkMode = JSON.parse(localStorage.getItem("dark-mode"));
    return darkMode;
  });

  const changeModeColor = () => {
    setModeColor((mode) => {
      localStorage.setItem("dark-mode", !mode);
      return !mode;
    });
  };

  const valueMemo = useMemo(
    () => ({
      modeColor,
      changeModeColor,
    }),
    [modeColor]
  );

  return (
    <ModeColorContext.Provider value={valueMemo}>
      {children}
    </ModeColorContext.Provider>
  );
};
