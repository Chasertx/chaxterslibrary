"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderNavBar.module.css";
import NavLinks from "../NavLinks/NavLinks";
import HeaderHorizontalDisplay from "../HeaderHorizontalDisplay/HeaderHorizontalDisplay";

const HeaderNavbar: React.FC = () => {
  type NavLink = {
    name: string;
    href: string;
  };

  let navItems: NavLink[] = [
    {
      name: "Resume",
      href: "/placeholder",
    },
    { name: "Libraries", href: "/placeholder" },
    { name: "Contact Me", href: "/placeholder" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <ul className={styles.horizontalLayout}>
          <Image
            src="/assets/logo.svg" // Path to your image in the public directory
            alt="Logo"
            width={35} // Desired width in pixels
            height={35} // Desired height in pixels
          />
          <span className={styles.title}>Chaxter's Libary</span>
        </ul>
      </div>
      <div>
        <NavLinks links={navItems} />
      </div>
      <div className={styles.rightPortion}>
        <HeaderHorizontalDisplay />
      </div>
    </header>
  );
};

export default HeaderNavbar;
