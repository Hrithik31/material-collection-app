import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addCollection } from "@/service/slices/CollectionSlice";
import styles from "./add-collection.module.scss";
import ModalComponent from "../modal";

const AddCollectionButton = (props) => {
  const { isAccordianCollectionButton } = props;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const addCollectionHandler = (collectionName, collectionDescrip) => {
    const newCollectionId = uuidv4();
    const payload = {
      id: newCollectionId,
      name: collectionName,
      description: collectionDescrip,
    };
    dispatch(addCollection(payload));
    setIsModalOpen(false);
  };
  return (
    <>
      {isAccordianCollectionButton ? (
        <div className={styles["add-button-container"]}>
          <div
            className={styles["new-collection-acc"]}
            onClick={openModalHandler}
          >
            <span className={styles["icon-wrapper"]}>
              <FontAwesomeIcon icon={faFolderPlus} className={styles["icon"]} />
            </span>
            <span className={styles["text"]}>New Collection</span>
          </div>
        </div>
      ) : (
        <div className={styles["add-button-card-container"]}>
          <div
            className={styles["add-icon-wrapper"]}
            onClick={openModalHandler}
          >
            <FontAwesomeIcon icon={faPlus} className={styles["add-icon"]} />
          </div>
        </div>
      )}

      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={addCollectionHandler}
      />
    </>
  );
};

export default AddCollectionButton;
