import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <nav className={styles["header-nav"]}>
        <div className={styles["image-wrapper"]}>
          <Image src="/svg/logoMark.svg" alt="logo" width={30} height={30} />
        </div>
        <ul className={styles["nav-links-container"]}>
          <li className={styles["nav-link"]}>Materials</li>
          <li className={styles["nav-link"]}>Elements</li>
          <li className={styles["nav-link"]}>Projects</li>
          <li className={styles["nav-link"]}>Manufacturers</li>
          <li className={`${styles["nav-link"]} ${styles["active"]}`}>
            Collections
          </li>
        </ul>
        <div>
          <Image
            src="../../../public/images/HeaderProfile.jpg"
            alt="profile icon"
            width={30}
            height={30}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
