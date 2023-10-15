import React, { useState, useEffect } from "react";
import "../../src/App.css";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import PopUpProduct from "./PopUpProduct";

import "reactjs-popup/dist/index.css";

function NavBar({ data }) {
  const [toggle, setToggle] = useState(false);
  const [sumNumber, setSumNumber] = useState(0);

  useEffect(() => {
    const sum = data
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);

    setSumNumber(sum);
  }, [data]);

  return (
    <div className="navbar">
      <Link className="logoNavbar" to={"/"}>
        LOGO{" "}
      </Link>
      <div>
        {data.length}
        <AiFillShopping
          size={28}
          className="shopIcon"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        {toggle ? (
          <div className="popup">
            <div className="upToggle">
              <h1>prodocts shop</h1>

              <div
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span className="closeNavbar">X</span>
              </div>
            </div>
            <div className="downToggle">
              {data.length !== 0 ? (
                <p>
                  {data.map((item, index) => {
                    return (
                      <>
                        <PopUpProduct
                          item={item}
                          key={index}
                          setSumNumber={setSumNumber}
                        />
                      </>
                    );
                  })}
                </p>
              ) : (
                <span>empty</span>
              )}
              <div className="amount">Amount : {sumNumber}</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
