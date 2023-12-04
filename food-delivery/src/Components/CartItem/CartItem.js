import { useCart } from "../../Contexts/cart-context"
import "./CartItemStyles.css"

function CartItem({item}){
    const {dispatch} = useCart()
  
    return (
        <li key={item.id} className="cart-item">
        <p className="cart-item-name">{item.label}</p>
        <p className="cart-item-price">{item.price}</p>
        <p className="cart-item-amount">{item.quantity}{' '}</p>
        <button className ="cart-item-button" onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item })}>
          +
        </button>
        <button className ="cart-item-button" onClick={
          () => item.quantity=== 1 ? dispatch({ type: 'REMOVE_FROM_CART', payload: item }):
          dispatch({ type: 'DECREMENT_QUANTITY', payload: item })}>
          -
        </button>
      </li>
    )
}

export default CartItem;