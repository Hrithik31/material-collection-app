import React, { useState } from "react";
import { useSelector } from "react-redux";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faFolder,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./collection-accordian.module.scss";
import AddCollectionButton from "../add-collection-button";
const CustomContent = ({ children }) => {
  return <div className={styles["accordian-items-container"]}> {children}</div>;
};
const CollectionAccordian = () => {
  const collectionData = useSelector(
    (state) => state.collectionReducer.collectionsData
  );
  const [accOpen, setAccOpen] = useState(false);
  return (
    <div className={styles["accordian-container"]}>
      <Collapsible
        trigger={
          <div
            className={styles["trigger-header"]}
            onClick={() => setAccOpen(!accOpen)}
          >
            <span className={styles["text"]}>My Collection</span>
            <FontAwesomeIcon
              icon={accOpen ? faChevronDown : faChevronUp}
              className={styles["trigger-icon"]}
            />
          </div>
        }
        classParentString={styles["accordian-wrapper"]}
        triggerStyle={{
          display: "flex",
          width: "100%",
        }}
        onOpen={() => setAccOpen(true)}
        onClose={() => setAccOpen(false)}
        innerWrapperStyle={{ display: "block" }}
      >
        <CustomContent>
          {collectionData?.map((collection) => {
            return (
              <>
                <div className={styles["accordian-item-wrapper"]}>
                  <div className={styles["icon-text-wrapper"]}>
                    <span className={styles["acc-item-icon"]}>
                      <FontAwesomeIcon icon={faFolder} />
                    </span>
                    <span className={styles["acc-item-txt"]}>
                      {collection?.name}
                    </span>
                  </div>

                  <span className={styles["acc-item-icon"]}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className={styles["acc-item-icon"]}
                    />
                  </span>
                </div>
              </>
            );
          })}
        </CustomContent>
      </Collapsible>

      <AddCollectionButton isAccordianCollectionButton={true} />
    </div>
  );
};

export default CollectionAccordian;
