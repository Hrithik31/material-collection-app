import React from "react";
import { useSelector } from "react-redux";
import styles from "./my-collections.module.scss";
import CollectionCard from "../collection-card";
import AddCollectionButton from "../add-collection-button";
const MyCollections = () => {
  const collectionData = useSelector(
    (state) => state.collectionReducer.collectionsData
  );
  return (
    <div className={styles["mycollections-container"]}>
      <div className={styles["title"]}>My Collections</div>
      <div className={styles["description"]}>
        Introducing collections: the ability to organise your materials, your
        way.
      </div>

      <div className={styles["results-count-wrapper"]}>
        <div className={styles["text"]}>
          Showing {collectionData?.length} Results
        </div>
      </div>
      <div className={styles["results-container"]}>
        {collectionData?.map((collection) => (
          <>
            <CollectionCard data={collection} />
          </>
        ))}

        <AddCollectionButton />
      </div>
    </div>
  );
};

export default MyCollections;
