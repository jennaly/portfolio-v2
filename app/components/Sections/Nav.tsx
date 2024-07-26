"use client";

import React, { useState } from "react";
import StyledLink from "../shared/StyledLink";
import ResumeButton from "../ResumeButton";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(true);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <nav className=" w-full max-w-screen-xl mx-auto p-10">
      <div className="flex flex-row justify-between items-center">
        <span>Logo</span>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((link, index) => (
            <StyledLink url={link.url} label={link.label} key={index} />
          ))}

          <ResumeButton>Resume</ResumeButton>
        </div>

        <div className="md:hidden">
          <div
            className={`hamburger ${showMobileNav ? "is-active" : ""}`}
            id="hamburger-1"
            onClick={toggleMobileNav}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      {showMobileNav && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-10">
          {links.map((link, index) => (
            <div onClick={toggleMobileNav} key={index}>
              <StyledLink url={link.url} label={link.label} />
            </div>
          ))}

          <ResumeButton>Resume</ResumeButton>
        </div>
      )}
    </nav>
  );
};

export default Nav;
const links = [
  {
    url: "/#Work",
    label: "Work",
  },
  {
    url: "/#About",
    label: "About",
  },
  {
    url: "/#Experience",
    label: "Experience",
  },
];
