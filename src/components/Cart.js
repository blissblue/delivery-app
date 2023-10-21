import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cart, setCart, cartTotal, removeFromCart, addFromCart }) {
  return (
    <>
      <div className="cart">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            addFromCart={addFromCart}
          />
        ))}
        <p className="cart-total">총 금액: {cartTotal}원</p>
      </div>
      {/* <div className="backdrop" /> */}
      {/* <footer className="actions">
        <button>Okay</button>
      </footer> */}
    </>
  );
}

export default Cart;
