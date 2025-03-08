"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import "./NavLinks.css";

interface NavLink {
  name: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth < 300);
  };

  // Listen for screen size changes
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-container">
      {/* Hamburger menu icon for small screens */}
      {isMobile && (
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      )}

      {/* UL of links or hamburger menu */}
      <ul className={cn("nav-links", { active: isMobile && isMenuOpen })}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
