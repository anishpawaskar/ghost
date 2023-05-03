import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import "./footerStyle.css";

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className="social-container">
            <h3 className='footer-title'>Ghost</h3>
            <ul className='list-links-non-bullet'>
                <li className="list-link-item">
                    <a href="https://twitter.com/anish_pawaskar">
                        <BsTwitter />
                    </a>
                </li>
                <li className="list-link-item">
                    <a href="https://github.com/anishpawaskar">
                        <GoMarkGithub />
                    </a>
                </li>
                <li className="list-link-item">
                    <a href="https://www.linkedin.com/in/anish-pawaskar-40163b251">
                        <BsLinkedin />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
