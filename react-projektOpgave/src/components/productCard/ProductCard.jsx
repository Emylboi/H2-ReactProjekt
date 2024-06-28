import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import { FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const handleAddToFavorites = (e) => {
    e.preventDefault();

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === product.id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some((item) => item.id === product.id)) { 
      cart.push(product); 
      localStorage.setItem("cart", JSON.stringify(cart));
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
        <div className={styles.shopIcon} onClick={handleAddToCart}>
          <BsFillCartPlusFill />
        </div>
      </figure>
    </Link>
  );
};

export default ProductCard;
