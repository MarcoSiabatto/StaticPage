import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./images/logo192.png";


export default function App() {
  return (
    <div className="container">
      <Navbar img={Logo} />
      <Main />
    </div>
  );
}