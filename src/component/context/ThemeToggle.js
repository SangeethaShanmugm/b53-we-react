import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}</button>
        </div>
    );
};
