import React from "react";
import "./menu.css";

function Menu({ item, addToCart }) {
  return (
    <>
      <div className="menu-item">
        <div className="menu-item-lt">
          <h2>{item.name}</h2>
          <p>가격: {item.price}원</p>
        </div>
        <div className="menu-item-rt">
          <p>수량: {item.quantity}</p>
          <button className="btn-add" onClick={() => addToCart(item)}>
            추가하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
