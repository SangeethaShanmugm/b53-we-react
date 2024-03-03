import { useParams } from "react-router-dom";

export function ProductDetails({ productList }) {
  const { productid } = useParams();
  const product = productList[productid]
  console.log(product.name)
  return (
    <div>ProductDetails - {product.name}</div>
  );
}
