import React, { useState } from "react";

import "./Item.css";

const Item = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitAmount = () => {
    //props.onSaveAmount();
    setEnteredAmount(1);
  };
  return (
    <div>
      <div className="item">
        <div className="item__desc">
          <h2>{props.title}</h2>
          <p className="item__description">{props.desc}</p>
          <div className="item__price">${props.price}</div>
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
          <button onClick={submitAmount}>+Add</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Item;
