import React, { useContext, useEffect, useState } from "react";
import style from "./ProductsAll.module.css";
import { ProductContext } from "../ContextApi/ProductContext";
import { NavLink } from "react-router-dom";

export default function ProductsAll() {
  const { products } = useContext(ProductContext);

  return (
    products &&
    products.length > 0 && (
      <div className={style.container}>
        {products.map((product) => (
          <div key={product.id} className={style.itemContainer}>
            <div className={style.itemImg}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={style.itemTitle}>{product.title}</div>
            <div className={style.itemPrice}>{product.price}</div>
            <div className={style.itemBtn}>
              <NavLink to={`/${product.id}`}>Click for more</NavLink>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
