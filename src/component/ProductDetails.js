import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../global";

export function ProductDetails() {
  const { productid } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${API}/${productid}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])


  // const product = productList[productid]
  // console.log(product.name)
  return (
    <div>ProductDetails - {product.name} - {product.price}</div>
  );
}
