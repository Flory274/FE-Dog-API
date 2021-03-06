import React from "react";
import "./Dogs.css";

const Dogs = ({ image }) => {
  //   const bodyTen = body.length > 200 ? body.slice(0, 200) : body;
  const date = new Date().toLocaleDateString();

  return (
    <div className="cards-container">
      <div className="card">
        <p>Akita</p>
        <img src={image} />
        <div className="card-footer">
          <span>Amazing Author One</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Dogs;
