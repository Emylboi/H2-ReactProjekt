import { useState } from "react";
import styles from "./category.module.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const Category = ({ category, setCategory, value }) => {
  const [hover, setHover] = useState(false);
  return (
    <p
      className={`${hover ? styles.hovering : ""} ${
        category === value ? styles.activated : ""
      }`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setCategory(value)}
    >
      {capitalizeFirstLetter(value)}
    </p>
  );
};

export default Category;