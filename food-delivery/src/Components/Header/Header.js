import React, { useState } from "react";
import "./Header.css";
import cartIcon from "./../../Assets/cart-shopping-solid.svg";
//import cartIcon from "../../assets/cart.png";
import Modal from "../UI/Modal/Modal";

function Header() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };
  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <div className="header">
      <div className="header-title">ReactMeals</div>
      <button
        id="cart-button"
        className="cart-button"
        onClick={openCartHandler}
      >
        <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
        <div className="cart-button-text">Your Cart</div>
        <div className="cart-number-tag">2</div>
      </button>
      <Modal isOpen={cartIsOpen} onClose={closeCartHandler}>
        <div style={{ backgroundColor: "#FFFFFF" }}>cart component here</div>
      </Modal>
    </div>
  );
}

export default Header;
