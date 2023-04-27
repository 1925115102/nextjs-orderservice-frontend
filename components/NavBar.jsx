import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">logo</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/home">home</Link>
            </li>
            <li>
              <Link href="/home">orders +</Link>
              <ul>
                <li>
                  <Link href="/orders/findAll">find all</Link>
                </li>
                <li>
                  <Link href="/orders/create">add orders</Link>
                </li>

              </ul>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
