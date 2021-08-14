import React from "react";
import styles from "./styles.module.scss";
import { MdRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <MdRestaurant />
        <div>pep-restaurant</div>
      </Link>
    </header>
  );
}

export default Header;
