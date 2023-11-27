import "./Header.css";
import cartIcon from "./../../Assets/cart-shopping-solid.svg";
//import cartIcon from "../../assets/cart.png";

function Header() {
  return (
    <div className="header">
      <div className="header-title">ReactMeals</div>
      <button id="cart-button" className="cart-button">
        <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
        <div className="cart-button-text">Your Cart</div>
        <div className="cart-number-tag">2</div>
      </button>
    </div>
  );
}

export default Header;
