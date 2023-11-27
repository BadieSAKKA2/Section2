import React, { useState } from "react";
import "./Header.css";
import cartIcon from "./../../assets/cart-shopping-solid.svg";
//import cartIcon from "../../assets/cart.png";
import Modal from "../UI/Modal/Modal";
import { CartProvider, useCart } from "../../Contexts/cart-context";

function Header() {

  const cartContext = useCart();
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
        <div className="cart-number-tag">{cartContext.state.cartItems.length}</div>
      </button>
      <Modal isOpen={cartIsOpen} onClose={closeCartHandler}>
        <div style={{ backgroundColor: "#FFFF00" }}>cart component here</div>
      </Modal>
    </div>
  );
}

export default Header;
