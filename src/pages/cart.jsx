import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/context';
import { CartItem } from './cart-items';
import { useNavigate } from "react-router-dom";
import "./cart.css";
export const Cart = () => {
  const [products, setProducts] = useState([]);
  const { cartItems,getTotalCartAmount,checkout } = useContext(ShopContext);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
    <div className="cartTitle">
        <h1>Your Cart Items</h1>
        <span>Will that be card or credit?</span>
      </div>
    <div className="cartItems">
      {products.length > 0 &&
        products.map((product) => {
          if (cartItems[product.id] > 0) { // Check if count is greater than 0
            return <CartItem key={product.id} product={product} />;
          }
          return null;
        })}
    </div>
    {totalAmount > 0 ? (
        <div className="checkout">
          <p className='subtotal'> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1 className='subtotal'> Your Shopping Cart is Empty</h1>
      )}
  </div>
  );
};