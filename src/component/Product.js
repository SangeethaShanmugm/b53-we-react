import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';


export function Product({ product, id, deleteButton }) {
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

      <IconButton
        aria-label="toggleBtn"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      {/* <button
        onClick={() => setShow(!show)}
      >Toggle description</button> */}


      <IconButton
        aria-label="toggleBtn"
        color="primary"
        onClick={() => navigate("/products/" + id)}
      >
        <InfoIcon />
      </IconButton>


      {/* <button onClick={() => navigate("/products/" + id)}>Info</button> */}
      {/* conditional Styling */}
      {/* <p style={summaryStyle} className="product-summary">{product.summary}</p> */}

      {show ? <p className="product-summary">{product.summary}</p> : null}


      <div className="product-align">
        <p className="product-price">Price- Rs. {product.price}</p>
        {/* <button>Add To Cart</button> */}
        <Button color="success" variant="outlined">Add To Cart</Button>

      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Counter />
        {deleteButton}
      </div>
    </div>
  );
}
