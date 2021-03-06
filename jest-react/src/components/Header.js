import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <span className="logo-span">The</span>
        <span className="logo">
          {" "}
          Daily <b>Dogs</b>
        </span>
      </div>

      <span className="blog-title">This is a blog like page</span>
      <span className="logout">Log out</span>
    </header>
  );
};

export default Header;
