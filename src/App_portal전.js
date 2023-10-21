import React, { useState } from "react";
import "./App.css";
import menuItems from "./data";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // 모달 상태

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart.filter((cartItem) => cartItem.quantity > 0));
  };
  const addFromCart = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart.filter((cartItem) => cartItem.quantity > 0));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <header>
        <h1 className="logo">Delivery App</h1>
        <button className="cart-button" onClick={() => setIsCartOpen(true)}>
          장바구니 보기
        </button>
      </header>
      <div className="menu">
        {menuItems.map((item) => (
          <Menu key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {isCartOpen && (
        <>
          <div className="modal">
            <Cart
              cart={cart}
              setCart={setCart}
              cartTotal={cartTotal}
              removeFromCart={removeFromCart}
              addFromCart={addFromCart}
            />
            <div className="btn-area">
              <button className="btn-payment">결제</button>
              <button
                className="btn-close"
                onClick={() => setIsCartOpen(false)}
              >
                취소
              </button>
            </div>
          </div>
          <div className="backdrop" />
        </>
      )}
    </div>
  );
}

export default App;
