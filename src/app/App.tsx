import React from "react";
import "./App.css";
import { RouterProvider } from "./providers/router";
import { StoreProvider } from "./providers/store/store-provider";

function App() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App;
