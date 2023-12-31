import React from "react";
import { createRoot } from "react-dom/client";


import Root from "./Root/Root";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);