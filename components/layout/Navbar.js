import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import classes from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo></Logo>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
