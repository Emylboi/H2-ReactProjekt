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
      <SectionHeader title="Subscribe to our newsletter!" />
      <form onSubmit={handleSubmit} className={styles.newsletter_form}>
        <label>
          Your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>

      <NewsLetterModal isOpen={isModalOpen} onRequestClose={closeModal} email={email} />
    </div>
  );
};

export default NewsLetter;
