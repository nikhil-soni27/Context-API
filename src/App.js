import React from "react";
import { APIContextProvider } from "./apiContext";
import Users from "./Users";

export default function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <h1>Context API Application</h1>
        <Users />
      </div>
    </APIContextProvider>
  );
}
