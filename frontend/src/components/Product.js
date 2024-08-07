import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <Link key={product._id} to={`/product/${product._id}`} className="card">
      <img className="medium" src={product.image} alt={product.name} />
      <div className="card-body">
        <h2>{product.name}</h2>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">Rs {product.price}</div>
      </div>
    </Link>
  );
}
