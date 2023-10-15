import React from "react";
import Card from "../components/Card";
import dataProjects from "../data/ItemsData";
import { useState, useEffect } from "react";

function Home({ addToCart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataProjects);
  }, []);

  return (
    <div className="containerCard">
      {data.map((info) => {
        return (
          <Card
            img={info.img}
            title={info.title}
            info={info.info}
            key={info.id}
            id={info.id}
            price={info.price}
            rating={info.rating}
            addToCart={() => addToCart(info.id)}
          />
        );
      })}
    </div>
  );
}

export default Home;
