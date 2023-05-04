import React, { useState } from 'react'
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosSettings } from "react-icons/io"
import "./NavbarStyle.css"
import { MobileNav } from './MobileNav';

export const Navbar = () => {
    const [ siteNav , setSiteNav ] = useState(false);

  return (
    <nav className="nav">
        <ul className="list-nav-non-bullet p-0-3 desktop-nav">
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
        <div className="hamburger-container">
            <button onClick={() => setSiteNav(!siteNav)} className="hamburger mobile-nav-icons">
                <GiHamburgerMenu />
            </button>
        </div>
        <ul className="list-nav-non-bullet margin-right desktop-nav">
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
        <div className="settings-container">
            <button className="setting mobile-nav-icons">
                <IoIosSettings />
            </button>
        </div>
        { siteNav && <MobileNav setSiteNav={setSiteNav} style = {{
            display: "block"
        }}/>}
    </nav>
  )
}
