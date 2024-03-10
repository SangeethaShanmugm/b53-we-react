import { useState } from "react"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export function AddProduct({ productList, setProductList }) {
    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [summary, setSummary] = useState("")

    const navigate = useNavigate()
    return (
        <div className="add-product">
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />

            <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />

            <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(event) => setPrice(event.target.value)} />


            <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />


            <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
            <Button variant="contained"
                // copy the productList and add newProduct
                onClick={() => {
                    const newProduct = {
                        name,
                        poster,
                        price,
                        rating,
                        summary
                    }
                    setProductList([...productList, newProduct])
                    console.log("newProduct", newProduct)
                    console.log("productList", productList)
                    navigate("/products")
                }}
            >Add Product</Button>

        </div>
    )
}