import useFetch from "../../hooks/useFetch";
import styles from "./userFavorites.module.css";
import ProductCard from "../productCard/ProductCard";
import { useState, useEffect } from "react";

const UserFavorites = () => {
  const [topRated, setTopRated] = useState([]);

  const { data: products } = useFetch(
    `https://dummyjson.com/products`,
    "products"
  );

  useEffect(() => {
    if (products) {
      const topRatedProducts = Array.from(
        new Set(products.map((product) => product.rating))
      );
      setTopRated(topRatedProducts);
      console.log(topRatedProducts);
    }
  }, [products]);

  if (!products) {
    return <p>loading...</p>;
  }

  let ratings = products.filter((product) => product.rating > 4.5);

  return (
    <>
      
      <section className={styles.productContainer}>
        {ratings.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default UserFavorites;
