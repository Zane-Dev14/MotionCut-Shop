import React, { useContext } from "react";
import { ShopContext } from "../context/context";
import "./cart.css"
export const CartItem = ({ product }) => {
    const { cartItems, addCart, removeCart, updateCartItemCount } =
      useContext(ShopContext);
  
    if (!product) {
      // Handle the case where the product is not found
      return null;
    }
  
    const { id, productName, price, productImage } = product;
  
    return (
      <div className="cartItem">
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <img src={product.image} alt={product.title} className="im" />

          <p> Price: ${price}</p>
          <div className="countHandler">
          <button onClick={() => removeCart(id)}> - </button>
<input
  value={cartItems[id] > 0 ? cartItems[id] : 0} // Ensure it's not negative
  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
/>
<button onClick={() => addCart(id)}> + </button>
          </div>
        </div>
      </div>
    );
  };