import React, { useContext } from "react";
import style from "./ProductSingle.module.css";
import { ProductContext } from "../ContextApi/ProductContext";
import { useParams } from "react-router-dom";

export default function ProductSingle() {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const product = products?.find((product) => product.id === productId);

  return (
    <div className={style.container}>
      <div className={style.itemImg}>
        <img src={product?.image} alt={product?.title} />
      </div>
      <div className={style.itemContainer}>
        <div className={style.itemTitle}>{product?.title}</div>
        <div className={style.itemPrice}>{product?.price}</div>
        <div className={style.itemDesc}>{product?.description}</div>
        <div className={style.itemCat}>{product?.category}</div>
      </div>
    </div>
  );
}
