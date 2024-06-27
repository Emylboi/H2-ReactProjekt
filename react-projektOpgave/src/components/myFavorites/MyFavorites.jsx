import { useState, useEffect } from "react";
import styles from "./myFavorites.module.css";
import { Link } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesFromStorage);
  }, []);

  const handleRemoveFromFavorites = (e, productId) => {
    e.stopPropagation();
    e.preventDefault();

    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    
    <div className={styles.favoritesContainer}>
     
      <div className={styles.favoritesGrid}>
        {favorites.map((product) => (
          <div key={product.id} className={styles.productCardWrapper}>
            <Link
              to={`/products/${product.id}`}
              className={styles.productCardLink}
            >
              <figure className={styles.productCard}>
                <img src={product.images[0]} alt={product.title} />
                <p>{product.title}</p>
                <div
                  className={styles.heartIcon}
                  onClick={(e) => handleRemoveFromFavorites(e, product.id)}
                >
                  <FaHeartBroken />
                </div>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
