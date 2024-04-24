import React from "react";
import Header from "../header";
import styles from "./dashboard.module.scss";
import CollectionAccordian from "../collection-accordian";
import MyCollections from "../my-collections";
const Dashboard = () => {
  return (
    <div className={styles["dashboard-container"]}>
      <Header />
      <div className={styles["dashboard-collection-container"]}>
        <div className={styles["dashboard-left-container"]}>
          <CollectionAccordian />
        </div>
        <div className={styles["dashboard-right-container"]}>
          <MyCollections />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
