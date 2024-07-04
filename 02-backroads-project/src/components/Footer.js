import React from "react";
import { pageLinks, socialLinks } from "../data";

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((page) => {
          const { id, text, href } = page;
          return (
            <li>
              <a href={href} className="footer-link">
                {" "}
                {text}{" "}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons" key={socialLinks.id}>
        {socialLinks.map((social) => {
          const { id, href, icon } = social;
          return (
            <li>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
