import CartItem from "./../CartItem/CartItem"
import classes from "./CartModal.module.css";
import { useCart } from './../../Contexts/cart-context';
import { useThemeProps } from "@mui/material";

const CartModal = (props) => {
  const { state , dispatch} = useCart();

  const handleCloseModal = ()=>{
    dispatch({type:"RENDER_CART"});
    props.onCLose(); //TODO: menich mestaw3eb barcha l'utilisation mtaa dispatch "RENDER_CART" fel cas hedha (manipulation mtaa UI). ani 3maltha hakka ken thb tbaddalha famma hatta mochkl.
  }
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <div >
            <div className={classes.content}>
              <ul>
                {state.cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
              <p>Total:{calculateTotalPrice(state.cartItems)}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
        
      </div>
  );
};

export default CartModal;