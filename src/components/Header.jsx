import React from "react";
import { GiBrickWall } from "react-icons/gi";
import "./headerStyle.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="heading-container">
        <h1 className="heading-main">
          <span className="icon-wrapper">
            <GiBrickWall className="brick-icon"/>
          </span>
          ghost
        </h1>
        <p className="heading-des">Thoughts, stories and ideas.</p>
      </div>
    </header>
  );
};
