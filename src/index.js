import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Gambar from "./assets/image/me.jpg";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
    name="Michael Nathan" 
    nim="21120118120016" 
    kelompok="25" 
    isNameBold
    image={Gambar}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
