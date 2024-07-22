import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function ProductsScreen(props) {
  const productType = new URLSearchParams(props.location.search).get("type");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  let { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const getProducts = (products) => {
    if (productType) {
      return products.filter(
        (product) =>
          product.category.toLowerCase() === productType.toLowerCase()
      );
    } else {
      return products;
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : products.length > 0 ? (
        <div className="row center">
          {getProducts(products).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      ) : (
        <MessageBox variant="danger">No products found</MessageBox>
      )}
    </div>
  );
}
