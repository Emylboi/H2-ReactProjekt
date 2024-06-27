import { useNavigate } from "react-router-dom";
import styles from "./productIndividual.module.css";

const ProductIndividual = ({ product }) => {
  console.log("Product reviews:", product.reviews);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/products/`);
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageTitleContainer}>
        <img
          src={product.images[0]}
          className={styles.productImage}
          alt={product.title}
        />
        <h1 className={styles.title}>{product.title}</h1>
      </div>
      <button className={styles.backButton} onClick={handleBackClick}>
        Tilbage
      </button>
      <div className={styles.allInfoProduct}>
        <div className={styles.descriptionSection}>
          <h3 className={styles.descriptionTitle}>Description</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.dimensionSection}>
          <h3 className={styles.dimensionTitle}>Dimensions</h3>
          <div className={styles.dimensions}>
            <p>Width: {product.dimensions.width} inches</p>
            <p>Height: {product.dimensions.height} inches</p>
            <p>Depth: {product.dimensions.depth} inches</p>
          </div>
        </div>
        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>Info</h3>
          <div className={styles.info}>
            <p>Price: {product.price}</p>
            <p>SKU: {product.sku}</p>
            <p>{product.availabilityStatus}</p>
            <p>{product.warrantyInformation}</p>
            <p>{product.returnPolicy}</p>
          </div>
        </div>
        <div className={styles.reviewSection}>
          <h3 className={styles.reviewTitle}>Reviews</h3>
          <div>
            {product.reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <p>Rating: {review.rating}</p>
                <p>{review.reviewerName}</p>
                <p>Date: {new Date(review.date).toLocaleDateString()}</p>
                <p>{review.reviewerEmail}</p>
                <br/>
                <p>Comment: {review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIndividual;
