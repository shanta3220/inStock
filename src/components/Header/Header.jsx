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
          className={({ isActive }) =>
            `header__nav--item ${
              window.location.pathname.includes("/warehouses") || isActive
                ? "active"
                : ""
            }`
          }
          to={`/`}
        >
          Warehouse
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header__nav--item ${
              window.location.pathname.includes("/inventories") || isActive
                ? "active"
                : ""
            }`
          }
          to={`/inventories`}
        >
          Inventory
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
