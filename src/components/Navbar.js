import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <img className="nav-icon" src={props.img} alt="React Logo" />
      <h3 className="nav-txt">ReactFacts</h3>
      <h4><a href="https://github.com/MarcoSiabatto/MarcoSiabatto" className="nav-side">MSR Development</a></h4>
    </nav>
  );
};

export default Navbar;
