import React from 'react'
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { BsMoonFill } from "react-icons/bs";
import "./NavbarStyle.css"

export const Navbar = () => {
  return (
    <nav className="nav">
        <ul className="list-nav-non-bullet p-0-3">
            <li className="list-nav-item">
                <button className="nav-btn">Home</button>
            </li>
            <li className="list-nav-item">
                <button className="nav-btn">Tag</button>
            </li>
            <li className="list-nav-item">
                <button className="nav-btn">Author</button>
            </li>
            <li className="list-nav-item">
                <button className="nav-btn">Help</button>
            </li>
        </ul>
        <ul className="list-nav-non-bullet margin-right">
            <li className="list-nav-icon">
                <button className="nav-icon btn-w-h-30-p0-3-0 bg-gray"><GrFacebookOption  className='fb'/></button>
            </li>
            <li className="list-nav-icon">
                <button className="nav-icon btn-w-h-30-p0-3-0 fs-1-3"><GrTwitter /></button>
            </li>
            <li className="list-nav-icon">
                <button className="nav-icon btn-w-h-30-p0-3-0 fs-1-15"><BsMoonFill /></button>
            </li>
            <li className="list-nav-icon">
                <button className="subscribe">Subscribe</button>
            </li>
        </ul>
    </nav>
  )
}
