import React from "react";
import Modal from "react-modal";
import styles from "./newsletterModal.module.css";

Modal.setAppElement("#root");

const NewsLetterModal = ({ isOpen, onRequestClose, email }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Subscription Success"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <h2>Subscribtion successful!</h2>
      <p>Thanks for subscribing to the newsletter!</p>
      <p>Email signed up: {email}</p>
      <button onClick={onRequestClose}>Luk</button>
    </Modal>
  );
};

export default NewsLetterModal;
