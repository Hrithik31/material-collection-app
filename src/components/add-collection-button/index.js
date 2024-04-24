import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import styles from "./add-collection.module.scss";
import ModalComponent from "../modal";

// const customeModalStyles = {
//   content: {
//     width: "466px",
//     height: "392px",
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "12px",
//     backgroundColor: "#FBFBF9",
//     border: "1px solid #d9d9d6",
//     boxShadow: " 0px 4px 20px 0px #00000026",
//   },
// };
// const MAX_COLLECTION_NAME_LENGTH = 40;
// const MAX_DESCRIPTION_LENGTH = 140;
const AddCollectionButton = (props) => {
  const { isAccordianCollectionButton } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [collectionName, setCollectionName] = useState("");
  // const [description, setDescription] = useState("");
  const addCollectionClickHandler = () => {
    console.log(">> clicked on add collection Button");
    setIsModalOpen(true);
  };
  // const closeModalHandler = () => {
  //   setIsModalOpen(false);
  // };

  // const collectionNameChangeHandler = (event) => {
  //   setCollectionName(event.target.value);
  // };
  // const descriptionChangeHandler = (event) => {
  //   setDescription(event.target.value);
  // };

  // const isCollectionNameValid =
  //   collectionName.length <= MAX_COLLECTION_NAME_LENGTH;
  // const isDescriptionValid = description.length <= MAX_DESCRIPTION_LENGTH;

  // const handlerSumbit = (event) => {
  //   event.preventDefault();
  // };
  return (
    <>
      {isAccordianCollectionButton ? (
        <div className={styles["add-button-container"]}>
          <div
            className={styles["new-collection-acc"]}
            onClick={addCollectionClickHandler}
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
            onClick={addCollectionClickHandler}
          >
            <FontAwesomeIcon icon={faPlus} className={styles["add-icon"]} />
          </div>
        </div>
      )}

      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default AddCollectionButton;
