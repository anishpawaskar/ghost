import React from "react";
import { GiBrickWall } from "react-icons/gi";
import "./introSectionStyle.css";

export const IntroSectin = () => {
  return (
    <div className="intro-section">
      <div className="img-container">
        <img
          className="post-img"
          src="https://wallpaperaccess.com/full/369911.jpg"
          alt=""
        />
      </div>
      <div className="post-box">
        <p className="color-cyan">getting started</p>
        <div className="intro__post__text-box">
        <h1>Welcome to Ghost</h1>
        <p className="color-secondry">
          Welcome, it's great to have you here. We know that first impressions
          are important, so we've populated your new site with some intial
          getting started posts that will help you get familiar with everything
          in no time.
        </p>
        </div>
        <div className="post-time-container">
          <div className="brick-icon-wrapper fs-1_5">
          <GiBrickWall className="brick-icon"/>
          </div>
          <div className="user-detail">
            <p className="username">Ghost</p>
            <p className="date">25 feb 2020 - <span> 1 min read</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
