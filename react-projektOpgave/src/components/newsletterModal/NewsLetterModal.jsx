import React from 'react';
import Modal from 'react-modal';
import styles from "./newsletterModal.module.css";

Modal.setAppElement('#root');

const NewsLetterModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Subscription Success"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <h2>Abonnent vellykkedes!</h2>
      <p>Tak for at abonnere på vores nyhedsbrev!</p>
      <button onClick={onRequestClose}>Luk</button>
    </Modal>
  );
};

export default NewsLetterModal;
