import "../App.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Card({ img, title, info, id, price, rating, addToCart }) {
  return (
    <div className="card" key={id}>
      <div className="imgContainerImg">
        <img src={img} alt={title} className="imgCard" />
      </div>
      <div className="containerInfoCard">
        <p>{title}</p>
        <ReactStars
          count={rating}
          color={"gold"}
          size={24}
          emptyIcon={<i className="far fa-star"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="red"
        />
        <span>{info}</span>
        <p>{price}$</p>
      </div>
      <div className="buttonTwoButtons">
        <button
          className="btnInfo"
          onClick={() => {
            addToCart();
          }}
        >
          add to Cart
        </button>

        <Link to={`/card/${id}`} className="btnInfo">
          <span>view product</span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
