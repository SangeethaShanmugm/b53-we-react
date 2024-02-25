import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Product({ product, id }) {
  // true  => visible => block
  // false => hide => none
  const [show, setShow] = useState(true);
  const navigate = useNavigate()

  const summaryStyle = {
    display: show ? "block" : "none"
  };

  const ratingStyle = {
    color: product.rating > 4.5 ? "green" : "red"
  };
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h3 className="product-name">{product.name}-{id}</h3>
        <h5 style={ratingStyle} className="product-rating">⭐{product.rating}</h5>
      </div>

      <button
        onClick={() => setShow(!show)}
      >Toggle description</button>
      <button onClick={() => navigate("/products/" + id)}>Info</button>
      {/* conditional Styling */}
      {/* <p style={summaryStyle} className="product-summary">{product.summary}</p> */}

      {show ? <p className="product-summary">{product.summary}</p> : null}


      <div className="product-align">
        <p className="product-price">Price- Rs. {product.price}</p>
        <button>Add To Cart</button>
      </div>
      <Counter />
    </div>
  );
}
