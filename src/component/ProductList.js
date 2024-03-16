import { Product } from "./Product";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import { API } from "../global"
import { useEffect, useState } from "react";

export function ProductList() {

  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    fetch(`${API}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProductList(data))
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
        />
      ))}
    </div>
  );
}
