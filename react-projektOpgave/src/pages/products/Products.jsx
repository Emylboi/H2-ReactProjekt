import { useState } from "react";
import Category from "../../components/category/Category";
import PageHeader from "../../components/pageHeader/PageHeader";
import ProductCard from "../../components/productCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import styles from "./products.module.css";

const Products = () => {
  /* const { data: product } = useFetch(`https://dummyjson.com/products/2`); */
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");

  const { data: products } = useFetch(
    `https://dummyjson.com/products`,
    "products"
  );

  if (!products) {
    return <p>loading..</p>;
  }

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredItems = products.filter((product) => {
    const categoryMatch = category === "All" || product.category === category;
    return categoryMatch;
  });

  return (
    <>
      {/* <PageHeader
        title="Produkter"
        subTitle=""
        headerImg={product?.images[0]}
      /> */}

      <h1>Products</h1>
      <div className={styles.categoryList}>
        <Category category={category} setCategory={setCategory} value={"All"} />
        {uniqueCategories.map((categoryItem, index) => (
          <Category
            key={index}
            category={category}
            setCategory={setCategory}
            value={categoryItem}
          />
        ))}
      </div>
      <ul className={styles.productCard_container}>
        {filteredItems.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
};

export default Products;
