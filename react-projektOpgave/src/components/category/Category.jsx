import { useState } from "react";
import styles from "./category.module.css";

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
      {value}
    </p>
  );
};

export default Category;
