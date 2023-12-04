import React from 'react';
import Item from '../Item/Item';
import './ItemsList.css';

const ItemsList = () => {
    const Items=[
        {id:'e1', label:'Sushi' , desc:'Finest fish and veggies', price: 22.99},
        {id:'e2', label:'Schnitzel' , desc:'A german specialty', price: 16.50},
        {id:'e3', label:'Barbecue Burger' , desc:'American, raw, meaty', price: 12.99},
        {id:'e4', label:'Green Bowl' , desc:'Healthy...and green...', price: 18.99}
    ];

    return(
        <div className='items-list'>
            {Items.map( (item) => (
            <Item 
                key={item.id}
                item={item}
            />
            ))}
        </div>
        
    )
}

export default ItemsList;