import { AddColor } from "./component/AddColor";
import "./App.css";


export default function App() {
  //JS starts

  //JS ends
  //JSX starts
  return (
    <div className="App">
      <Product />
      {/* <AddColor /> */}
    </div>
  );
  //JSX ends
}

function Product() {

  const product = {
    name: "Apple iPhone 13 (128GB)",
    poster: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg",
    price: 51790,
    rating: 5,
    summary: "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"

  }

  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-rating">⭐{product.rating}</p>
      </div>
      <p className="product-summary">{product.summary}</p>
      <div className="product-align">
        <p className="product-price">Price- Rs. {product.price}</p>
        <button>Add To Cart</button>
      </div>

    </div>
  )
}

