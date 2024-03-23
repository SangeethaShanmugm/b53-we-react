import { useState } from "react"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../global";


export function AddProduct() {
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

                    // console.log("newProduct", newProduct)
                    // console.log("JSON newProduct", JSON.stringify(newProduct.name))
                    // console.log("JSON newProduct", JSON.stringify(newProduct))

                    // setProductList([...productList, newProduct])
                    // 1.method  - POST
                    // 2.body - data - JSON  =>  JSON.stringify(newProduct)
                    // 3.headers - JSON
                    fetch(`${API}`, {
                        method: "POST",
                        body: JSON.stringify(newProduct),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((res) => res.json())
                        .then(() => navigate("/products")
                        )

                    // console.log("productList", productList)

                }}
            >Add Product</Button>

        </div>
    )
}