import React, { useState } from "react";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [showMobMenu, setShowMobMenu] = useState("");

  const handleChange = () => {
    setShowMobMenu(showMobMenu === "" ? "show" : "");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand navbar-logo" href="#">
          <h1 className="mb-0">Logo</h1>
        </a>
        <button
          onClick={handleChange}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMobMenu}`} id="navbar">
          <ul className="navbar-nav w-100 align-items-center justify-content-center px-3">
            <li className="nav-item active px-3">
              <a className="nav-link text-black text-uppercase" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown px-3">
              <a
                className="nav-link text-black text-uppercase dropdown-toggle"
                href=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Men
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item text-black" href="#">
                  Action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Another action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown px-3">
              <a
                className="nav-link text-black text-uppercase dropdown-toggle"
                href=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Women
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item text-black" href="#">
                  Action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Another action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown px-3">
              <a
                className="nav-link text-uppercase text-black dropdown-toggle"
                href=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Girls
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item text-black" href="#">
                  Action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Another action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown px-3">
              <a
                className="nav-link text-uppercase text-black dropdown-toggle"
                href=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Boys
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item text-black" href="#">
                  Action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Another action
                </a>
                <a className="dropdown-item text-black" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0">
              <FontAwesomeIcon className="header-icon me-3" icon={faSearch} />
            </p>
            <p className="mb-0 position-relative">
              <FontAwesomeIcon
                className="header-icon ms-3"
                icon={faCartShopping}
              />
              <span className="position-absolute cart-item-count">0</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
