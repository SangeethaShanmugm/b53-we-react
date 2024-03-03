import { Product } from "./Product";
import { INITIAL_PRODUCT_LIST } from "../App";

export function ProductList({ productList }) {
  return (
    <div className="product-list">
      {productList.map((pd, index) => (
        <Product key={index} product={pd} id={index} />
      ))}
    </div>
  );
}
