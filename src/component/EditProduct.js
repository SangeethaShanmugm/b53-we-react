import { useState, useEffect } from "react"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import { useParams } from "react-router-dom";


export function EditProduct() {

  const { productid } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/${productid}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  console.log(product)

  return product ? <EditProductForm product={product} /> : "Loading..."
}

function EditProductForm({ product }) {

  const [name, setName] = useState(product.name)
  const [poster, setPoster] = useState(product.poster)
  const [price, setPrice] = useState(product.price)
  const [rating, setRating] = useState(product.rating)
  const [summary, setSummary] = useState(product.summary)


  const navigate = useNavigate()


  return (
    <div className="add-product">
      <TextField id="outlined-basic" label="Name" value={name} variant="outlined" onChange={(event) => setName(event.target.value)} />

      <TextField id="outlined-basic" label="Poster" value={poster} variant="outlined" onChange={(event) => setPoster(event.target.value)} />

      <TextField id="outlined-basic" label="Price" value={price} variant="outlined" onChange={(event) => setPrice(event.target.value)} />


      <TextField id="outlined-basic" label="Rating" value={rating} variant="outlined" onChange={(event) => setRating(event.target.value)} />


      <TextField id="outlined-basic" label="Summary" value={summary} variant="outlined" onChange={(event) => setSummary(event.target.value)} />
      <Button onClick={() => navigate("/products")} >CANCEL</Button>
      <Button variant="contained" color="success"
        onClick={() => {
          const updatedProduct = {
            name,
            poster,
            price,
            rating,
            summary
          }
          // 1.method  - PUT
          // 2.body - data - JSON  =>  JSON.stringify(updatedProduct)
          // 3.headers - JSON
          fetch(`${API}/${product.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((res) => res.json())
            .then(() => navigate("/products")
            )

        }}
      >SAVE</Button>

    </div>
  )
}