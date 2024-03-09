import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeContent } from "./ThemeContent";
import { ThemeContextProvider } from "./ThemeContextProvider";

function ExampleContext() {
    return (
        <ThemeContextProvider>
            <ThemeToggle />
            <ThemeContent />
        </ThemeContextProvider>
    );
}

export default ExampleContext;
