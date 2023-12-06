import CartItem from "./../CartItem/CartItem"
import classes from "./CartModal.module.css";
import { useCart } from './../../Contexts/cart-context';


const CartModal = (props) => {
  const { state , dispatch} = useCart();

  console.log("state: ",state)
  
  const handleCloseModal = ()=>{
    dispatch({type:"RENDER_CART"});
    props.onCLose(); //TODO: menich mestaw3eb barcha l'utilisation mtaa dispatch "RENDER_CART" fel cas hedha (manipulation mtaa UI). Hani 3maltha hakka ken thb tbaddalha famma hatta mochkl.
  }
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  //MTBH: removed the modal and backdrop <divs> cuz they were handled in the Modal component (reusable)
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