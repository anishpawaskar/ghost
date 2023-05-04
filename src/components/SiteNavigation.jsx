import React from 'react';
import "./siteNavigationStyle.css";

export const SiteNavigation = ({ setSiteNav }) => {
  return (
    <ul className="mobile-site-nav">
        <li className="mobile-list-item">Home</li>
        <li className="mobile-list-item">Tag</li>
        <li className="mobile-list-item">Author</li>
        <li className="mobile-list-item">Help</li>
        <li onClick = {() => setSiteNav(false)} className="close-btn">X
        </li>
    </ul>
  )
}
