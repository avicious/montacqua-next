"use client";
import Link from "next/link";
import { useState } from "react";
import { close, menu } from "../../public/images";
import styles from "./header.module.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Link href="/">MONTACQUA</Link>
        </div>
        <ul className={styles.desktop}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/villas">Our Villas</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
        <div className={styles.mobile}>
          <img
            onClick={() => setToggle((prev) => !prev)}
            src={toggle ? close.src : menu.src}
            alt="menu"
          />
          <div className={toggle ? styles.block : styles.hidden}>
            <ul className={styles.mobileMenu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/villas">Our Villas</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
