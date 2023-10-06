import React from "react";
import ReactDOM from "react-dom/client";
import Hearder from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Hearder />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
