import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./modal.module.scss";
const customeModalStyles = {
  content: {
    width: "466px",
    height: "392px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    backgroundColor: "#FBFBF9",
    border: "1px solid #d9d9d6",
    boxShadow: " 0px 4px 20px 0px #00000026",
  },
};
const MAX_COLLECTION_NAME_LENGTH = 40;
const MAX_DESCRIPTION_LENGTH = 140;
const ModalComponent = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    isDeleteCollection,
    onSubmit,
    onDelete,
  } = props;
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [isCollectionNameValid, setIsCollectionNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const closeModalHandler = () => {
    setCollectionName(""); // Reset collectionName
    setDescription("");
    setIsModalOpen(false);
  };

  const collectionNameChangeHandler = (event) => {
    setCollectionName(event?.target?.value);
    setIsCollectionNameValid(
      event?.target?.value?.length <= MAX_COLLECTION_NAME_LENGTH
    );
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event?.target?.value);
    setIsDescriptionValid(
      event?.target?.value?.length <= MAX_DESCRIPTION_LENGTH
    );
  };

  const handlerSumbit = (event) => {
    event.preventDefault();
    !isDeleteCollection && onSubmit && onSubmit(collectionName, description);
    isDeleteCollection && onDelete && onDelete();
    setCollectionName(""); // Reset collectionName
    setDescription("");
  };

  useEffect(() => {
    return () => {
      setCollectionName("");
      setDescription("");
    };
  }, []);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModalHandler}
        style={{
          ...customeModalStyles,
          content: {
            ...customeModalStyles.content,
            height: isDeleteCollection
              ? "290px"
              : customeModalStyles.content.height,
          },
        }}
      >
        <div className={styles["modal-container"]}>
          <form className={styles["form-container"]} onSubmit={handlerSumbit}>
            {isDeleteCollection ? (
              <>
                <div className={styles["content-container"]}>
                  <div className={styles["content-txt-wrapper"]}>
                    <div className={styles["remove-title"]}>
                      Delete collection
                    </div>
                    <div className={styles["description"]}>
                      <p>
                        Are you sure you would like to delete this collection?
                      </p>
                      <p>You wont be able to undo this.</p>
                    </div>
                  </div>
                  <div className={styles["delete-actions-options"]}>
                    <button
                      className={`${styles["button"]} ${styles["active"]}`}
                      type="submit"
                    >
                      Delete
                    </button>
                    <button
                      className={styles["button"]}
                      onClick={closeModalHandler}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles["form-title"]}>New Collection</div>

                <div className={styles["form-body"]}>
                  <div className={styles["collection-name-wrapper"]}>
                    <label
                      className={styles["collection-name-label"]}
                      htmlFor="collectionName"
                    >
                      Collection Name{" "}
                      <span className={styles["required"]}>*</span>
                    </label>
                    <input
                      type="text"
                      id="collectionName"
                      value={collectionName}
                      onChange={collectionNameChangeHandler}
                      className={`${styles["form-input"]} ${
                        isCollectionNameValid ? "" : styles["invalid"]
                      }`}
                    />
                    <span
                      className={styles["count-tracker"]}
                    >{`${collectionName?.length} / 40`}</span>
                  </div>
                  <div className={styles["collection-description-wrapper"]}>
                    <label
                      className={styles["description-label"]}
                      htmlFor="description"
                    >
                      Description <span className={styles["required"]}>*</span>
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={descriptionChangeHandler}
                      className={`${styles["form-textarea"]} ${
                        isDescriptionValid ? "" : styles['"invalid"']
                      }`}
                      rows="4"
                    />
                    <span
                      className={styles["count-tracker"]}
                    >{`${description?.length} / 140`}</span>
                  </div>

                  <div className={styles["form-footer-actions"]}>
                    <button
                      className={styles["button"]}
                      onClick={closeModalHandler}
                    >
                      close
                    </button>
                    <button
                      type="submit"
                      className={`${styles["button"]} ${
                        !isCollectionNameValid ||
                        !isDescriptionValid ||
                        collectionName?.length === 0 ||
                        description.length === 0
                          ? styles["disabled"]
                          : styles["active"]
                      }`}
                      disabled={
                        !isCollectionNameValid ||
                        !isDescriptionValid ||
                        collectionName?.length === 0 ||
                        description.length === 0
                      }
                    >
                      Create Collection
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
