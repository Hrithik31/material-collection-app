import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { removeCollection } from "@/service/slices/CollectionSlice";
import styles from "./collection-card.module.scss";
import ModalComponent from "../modal";
const CollectionCard = ({ data }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteCollectionClickHandler = () => {
    setIsModalOpen(true);
  };

  const deleteCollectionhandler = () => {
    const payload = {
      id: data?.id,
    };
    dispatch(removeCollection(payload));
    setIsModalOpen(false);
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
        <div className={styles["card-title"]}>{data?.name}</div>
        <div className={styles["card-description"]}>{data?.description}</div>
      </div>

      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onDelete={deleteCollectionhandler}
        isDeleteCollection={true}
      />
    </div>
  );
};

export default CollectionCard;
