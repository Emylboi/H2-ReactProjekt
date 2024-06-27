import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const handleAddToFavorites = (e) => {
    e.preventDefault(); // Prevent navigating to product detail page

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === product.id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <Link to={`/products/${product.id}`} className={styles.productCardLink}>
      <figure className={styles.productCard}>
        <img src={product.images[0]} alt={product.title} />
        <p>{product.title}</p>
        <div className={styles.heartIcon} onClick={handleAddToFavorites}>
          <FaHeart />
        </div>
      </figure>
    </Link>
  );
};

export default ProductCard;
