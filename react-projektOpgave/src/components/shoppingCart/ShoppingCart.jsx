import { useState, useEffect } from "react";
import styles from "./shoppingCart.module.css";
import { Link } from "react-router-dom";
import { BsFillCartXFill  } from "react-icons/bs";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartFromStorage =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartFromStorage);
  }, []);

  const handleRemoveFromCart = (e, productId) => {
    e.stopPropagation();
    e.preventDefault();

    const updatedCart = cart.filter(
      (product) => product.id !== productId
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    
    <div className={styles.cartContainer}>
     
      <div className={styles.cartGrid}>
        {cart.map((product) => (
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
                  onClick={(e) => handleRemoveFromCart(e, product.id)}
                >
                  <BsFillCartXFill />
                </div>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
