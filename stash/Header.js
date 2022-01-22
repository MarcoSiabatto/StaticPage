import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={props.img} alt="loading" className="imgLogo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
