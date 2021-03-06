import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <Router>
      <div className="menu-container">
        <nav className="nav-container">
          <Link className="link" to="/">
            Dogs
          </Link>
          <Link className="link" to="/comments">
            Comments
          </Link>
          <Link className="link" to="/albums">
            Albums
          </Link>
          <Link className="link" to="/photos">
            Photos
          </Link>
          <Link className="link" to="/users">
            Users
          </Link>
        </nav>
      </div>
    </Router>
  );
};

export default Menu;
