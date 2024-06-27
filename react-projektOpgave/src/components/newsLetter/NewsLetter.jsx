import React, { useState } from "react";
import NewsLetterModal from "../newsletterModal/NewsLetterModal";
import styles from "./newsletter.module.css";
import SectionHeader from "../sectionHeader/SectionHeader";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  return (
    <div className={styles.newsletter_container}>
      <SectionHeader title="Tilmeld dig vores nyhedsbrev!" />
      <form onSubmit={handleSubmit} className={styles.newsletter_form}>
        <label>
          Din Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Tilmeld</button>
      </form>

      <NewsLetterModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default NewsLetter;
