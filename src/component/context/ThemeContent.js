import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export function ThemeContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Themed Content</h2>
            <p>This content is displayed based on the selected theme.</p>
        </div>
    );
}
