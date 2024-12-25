import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.scss";

const Navigation = (props) => {
  const [isShow, setIsShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Ẩn navigation khi pathname là /login
    setIsShow(location.pathname !== "/login");
  }, [location.pathname]);

  return (
    <>
      {isShow && (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
