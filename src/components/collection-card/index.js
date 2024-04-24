import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./collection-card.module.scss";
const CollectionCard = () => {
  const deleteCollectionClickHandler = () => {
    console.log(">> delete collection Click Handler");
  };
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-header"]}>
        <div className={styles["card-download-wrapper"]}>
          <span className={styles["card-download-text"]}>Download data</span>
          <span className={styles["icon-wrapper"]}>
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className={styles["icon"]}
            />
          </span>
        </div>

        <div className={styles["card-right-header-wrapper"]}>
          <div className={styles["card-text-icon"]}>
            <span className={styles["right-header-text"]}>87</span>
            <span className={styles["sq-icon-wrapper"]}>
              <Image
                src="/svg/Vector.svg"
                alt="sq-icon"
                width={12}
                height={12}
              />
            </span>
          </div>
          <div
            className={styles["delete-icon-wrapper"]}
            onClick={deleteCollectionClickHandler}
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              className={styles["delete-icon"]}
            />
          </div>
        </div>
      </div>

      <div className={styles["card-content-wrapper"]}>
        <div className={styles["card-title"]}>My Collection</div>
        <div className={styles["card-description"]}>
          Collection Description (Extended) that is added by user when creating
          the collection to inform users of the content etc.
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
