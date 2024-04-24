import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./collection-accordian.module.scss";
import AddCollectionButton from "../add-collection-button";

const CollectionAccordian = () => {
  const [accOpen, setAccOpen] = useState(false);
  return (
    <div className={styles["accordian-container"]}>
      <Collapsible
        trigger={
          <div className={styles["trigger-header"]}>
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
      >
        <p> This is dumy content</p>
      </Collapsible>

      <AddCollectionButton isAccordianCollectionButton={true} />
    </div>
  );
};

export default CollectionAccordian;
