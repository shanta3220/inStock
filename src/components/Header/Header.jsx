import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Logo/InStock-Logo.svg";

import "./Header.scss";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header__logo">
        <Link to="/">
          <img className="header__img" src={logo} alt="instock logo" />
        </Link>
      </div>

      <div className="header__nav--items">
        <NavLink
          className={`header__nav--item ${
            window.location.pathname.startsWith("/warehouses") ? "active" : ""
          }`}
          to={`/`}
        >
          Warehouse
        </NavLink>
        <NavLink className="header__nav--item" to={`/inventory`}>
          Inventory
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
