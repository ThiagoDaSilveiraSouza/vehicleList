import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ApiDataProvider } from "./contexts/ApiDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <ApiDataProvider>
        <App />
      </ApiDataProvider>
    </Theme>
  </React.StrictMode>
);
