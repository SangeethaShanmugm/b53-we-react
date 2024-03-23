import { Product } from "./Product";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import { API } from "../global"
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

export function ProductList() {

  const [productList, setProductList] = useState([]);

  const navigate = useNavigate()

  const getProducts = async () => {
    try {
      const response = await axios.get(`${API}`, { method: "GET" })
      console.log(response.data)
      setProductList(response.data)
    } catch (error) {
      console.error("Error while fetching productList", error)
    }

    // fetch(`${API}`, { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => setProductList(data))
  }

  useEffect(() => getProducts(), [])//called only once

  return (
    <div className="product-list">

      {productList.map((pd, index) => (
        <Product key={index} product={pd} id={pd.id}
          deleteButton={
            <IconButton
              aria-label="deleteBtn"
              color="secondary"
              onClick={() => {
                fetch(`${API}/${pd.id}`, {
                  method: "DELETE"
                })
                  .then(() => getProducts())

              }}

            >
              <DeleteIcon />
            </IconButton>

          }

          editButton={
            <IconButton
              aria-label="editBtn"
              color="error"
              onClick={() => navigate(`/products/edit/${pd.id}`)}

            >
              <EditIcon />
            </IconButton>

          }

        />
      ))}
    </div>
  );
}
