import React, { useState } from "react";
import "../../src/App.css";

function PopUpProduct({ item, key, setSumNumber }) {
  const [price, setPrice] = useState(item.price);

  const growProduct = (item) => {
    setPrice((prevent) => prevent + item.price);
    setSumNumber((prevent) => prevent + item.price);
  };
  const reduceProduct = (item) => {
    setPrice((prevent) => prevent - item.price);
    setSumNumber((prevent) => prevent - item.price);
  };

  return (
    <div className="cardPopUp" key={key}>
      <div className="imgPopUp">
        <img className="img" src={item.img} alt={item.title} />
      </div>
      <div className="insideDivNavbar">
        <span className="titleNavbar">{item.title}</span>
        <span>{price}</span>
        <div className="groupBtns">
          <button className="btnGrow" onClick={() => growProduct(item)}>
            +
          </button>
          <button className="btnGrow" onClick={() => reduceProduct(item)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpProduct;
