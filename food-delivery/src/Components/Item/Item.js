import React, { useState } from "react";
import { useCart } from "../../Contexts/cart-context";
import "./Item.css";

const Item = ({item}) => {
  const {state, dispatch} = useCart();
  const cartItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
  const [enteredAmount, setEnteredAmount] = useState(1);

  const addToCart = () => {
    if(cartItem){
      //console.log("added amout:", enteredAmount);
      dispatch({ type: 'ADD_AMOUNT', payload: { item, quantity: parseInt(enteredAmount) } });
      setEnteredAmount(1);
    }else{
      //console.log("new amount amout:", enteredAmount);
      dispatch({ type: 'ADD_TO_CART', payload: { item, quantity: parseInt(enteredAmount) } });
      setEnteredAmount(1);
    }
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  /*const { state, dispatch } = useCart();
  const cartItem = state.cartItems.find((cartItem) => cartItem.id === props.id);
  
  const incrementQuantity = () => {
    if (cartItem) {
      dispatch({ type: 'INCREMENT_QUANTITY', payload: props });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...props, quantity: 1 } });
    }
  };*/
  /*const submitAmount = () => {
    //item.onSaveAmount();
    setEnteredAmount(1);
  };
*/
 return (
    <div>
      <div className="item">
        <div className="item__desc">
          <h2>{item.label/* MTBH: the error was that item.title was called instead (undefined) */ }</h2> 
          <div className="item__description">{item.desc}</div>
          <div className="item__price">${item.price}</div>
        </div>
        <div className="item__amount">
          <div className="item-amount__controls">
            <label className="amount-label">Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <button onClick={addToCart}>+Add</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}


export default Item;
