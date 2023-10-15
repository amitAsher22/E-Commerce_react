import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/ItemsData";
import "../../src/App.css";

function CardId() {
  let param = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = data.filter((item) => item.id === Number(param.id));
    setProduct(product[0]);
  }, [param]);

  return (
    <div className="mainDeviceId">
      <div className="right">
        <img src={product.img} alt={product.title}></img>
      </div>
      <div className="left">
        <h1 className="titleLeftId">{product.title}</h1>
        <p>{product.info}</p>
        <span className="priceNavBarId">{product.price}$</span>
      </div>
    </div>
  );
}

export default CardId;
