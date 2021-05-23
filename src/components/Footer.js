import React from "react";
import logo from "../assets/images/csuf-logo-web-reversedbw.png";

console.log(logo);

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="http://www.fullerton.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Logo" />
        </a>
        <p>
          <a href="contact.aspx">Contacts and Addresses</a> &nbsp; | &nbsp;
          General: 657-278-2011 &nbsp; | &nbsp; Emergency Closure Info:
          877-278-1712 Tell us about a{" "}
          <a href="http://www.fullerton.edu/reportati/">
            web accessibility problem
          </a>
          . &nbsp; | &nbsp; © California State University, Fullerton. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
