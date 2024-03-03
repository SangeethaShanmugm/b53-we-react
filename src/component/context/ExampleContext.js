import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeContent } from "./ThemeContent";

function ExampleContext() {
    return (
        <div>
            <ThemeToggle />
            <ThemeContent />
        </div>
    );
}

export default ExampleContext;
