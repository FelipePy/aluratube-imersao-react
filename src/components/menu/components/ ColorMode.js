import { createContext, useState } from "react";
import dark from "../../../styles/themes/dark";
import light from "../../../styles/themes/light";
import { setCookie } from "nookies";


export const ColorModeContext = createContext({
    mode: {},
    setMode: () => {},
    toggleMode: () => {},
});

export default function ColorModeProvider({ children, initialMode }) {
  const [mode, setMode] = useState(initialMode || light);

  const toggleMode = () => {
    setMode(mode.title === 'light' ? dark : light);
    setCookie(null, "theme", JSON.stringify(mode.title === 'light' ? dark : light), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
  };

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}