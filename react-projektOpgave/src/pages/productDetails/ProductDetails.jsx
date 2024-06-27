import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductIndividual from "../../components/productIndividual/ProductIndividual";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product } = useFetch(`https://dummyjson.com/products/${id}`);

  if (!product) {
    return <p>loading..</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {product && <ProductIndividual key={product.id} product={product} />}
    </div>
  );
};

export default ProductDetails;
