import React from "react";
import styles from "./styles.module.scss";
import { MdRestaurant } from "react-icons/md";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div>
          <MdRestaurant />
          <div>pep-restaurant</div>
        </div>
      </Link>
    </header>
  );
}