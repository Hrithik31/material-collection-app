import React from "react";
import styles from "./my-collections.module.scss";
import CollectionCard from "../collection-card";
import AddCollectionButton from "../add-collection-button";
const MyCollections = () => {
  return (
    <div className={styles["mycollections-container"]}>
      <div className={styles["title"]}>My Collections</div>
      <div className={styles["description"]}>
        Introducing collections: the ability to organise your materials, your
        way.
      </div>

      <div className={styles["results-count-wrapper"]}>
        <div className={styles["text"]}>Showing 118 Results</div>
      </div>
      <div className={styles["results-container"]}>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <AddCollectionButton />
      </div>
    </div>
  );
};

export default MyCollections;
