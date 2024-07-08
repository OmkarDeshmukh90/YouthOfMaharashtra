import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav.tsx";
import Footer from "./Components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
