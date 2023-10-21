import React from "react";
import "./CartItem.css";

function CartItem({ item, removeFromCart, addFromCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-lt">
        <p>{item.name}</p>
        <div className="cart-item-amount">
          <p className="cart-item_price">{item.price}원</p>
          <p>수량: {item.quantity}</p>
        </div>
      </div>
      <div className="cart-item-rt">
        <button className="btn-cart" onClick={() => removeFromCart(item)}>
          -
        </button>
        <button className="btn-cart" onClick={() => addFromCart(item)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
