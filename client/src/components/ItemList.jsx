import React from 'react'
import Item from './Item.jsx'

const ItemList = () => {
    const itemData = JSON.parse(localStorage.getItem('itemData')) || [];
    
    console.log(itemData)
    return (
        <>
        {itemData.map((item, i) => (
            <Item
          key={`${item.name}-${i}`}
          name={item.name}
          price={item.price}
          category={item.category}
          description={item.description}
          quantity={item.quantity}
          />
        ))}
      </>
    );
};

export default ItemList