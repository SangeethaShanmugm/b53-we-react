import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export function ThemeContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme === "light" ? "#ffffff" : "#000000", color: theme === "light" ? "#000000" : "#ffffff" }}>
            <h2>Themed Content</h2>
            <p>This content is displayed based on the selected theme.</p>
        </div>
    );
}
