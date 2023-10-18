import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SearchContext } from '../components/search'; // Adjust the import path
import {ShopContext} from "../context/context";
import './shop.css';

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter products based on the search term
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;
  const {addCart,cartItems}=useContext(ShopContext);
  const cartItemCount=cartItems[products.id]
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Ambatu Stores</h1>
        <span>Our Prices Will Blow You!!</span>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <div className="description">
              <img src={product.image} alt={product.title} className="im" />
              <p>
                <b>{product.title}</b>
              </p>
              <p>${product.price}</p>

            </div>
            <button className="addToCartBttn" onClick={() => addCart(product.id)}>
        Add To Cart{cartItemCount > 0 && <> ({cartItemCount})</>} </button>
          </div>
        ))}
      </div>

    </div>
  );
};
