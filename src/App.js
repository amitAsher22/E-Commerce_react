import "./App.css";
import CardId from "./components/CardId";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import dataProjects from "./data/ItemsData";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const addToCart = (id) => {
    const itemsAfterFilter = data.filter((item) => item.id === id);
    const newObject = itemsAfterFilter[0];
    const exist = newArray.includes(newObject);

    if (newArray.length <= 0) {
      setNewArray((prevent) => [...prevent, newObject]);
    } else {
      if (exist) {
        console.log("no push");
      } else {
        setNewArray((prevent) => [...prevent, newObject]);
        console.log("push");
      }
    }
  };

  useEffect(() => {
    setData(dataProjects);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar data={newArray} />
        <Routes>
          <Route element={<Home addToCart={addToCart} />} path="/" />
          <Route element={<CardId />} path="/card/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
