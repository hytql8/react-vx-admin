import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.scss";
import { ConfigProvider } from "antd";
import { App } from "../src/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ cssVar: true }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
