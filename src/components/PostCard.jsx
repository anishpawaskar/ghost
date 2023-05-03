import React from 'react';
import { GiBrickWall } from "react-icons/gi";
import "./postCardStyle.css";

export const PostCard = ({ key, title, imgUrl, des, postTime }) => {
  return (
    <div key = {key} className='post-card'>
        <div className="thumbnail">
            <img className='post-card-img' src= {imgUrl} alt="ghost-of-tushima" />
        </div>
        <div className="post-content">
            <div className="post__text-box">
            <p className='color-cyan'>getting started</p>
            <h1>{title}</h1>
            <p className='post-des'>{des}</p>
            </div>
            <div className="post-time-container">
          <div className="brick-icon-wrapper fs-1_5">
          <GiBrickWall className="brick-icon"/>
          </div>
          <div className="user-detail">
            <p className="username">Ghost</p>
            <p className="date">25 feb 2020 - <span>{postTime}</span></p>
          </div>
        </div>
        </div>
    </div>
  )
}
