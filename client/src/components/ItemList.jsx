import React from 'react'
import { useState } from 'react';
import Item from './Item.jsx'

const ItemList = () => {
    const [itemData, setItemData] = React.useState([]);

    React.useEffect(() => {
        fetch('/products')
            .then(response => response.json())
            .then(data => setItemData(data.data))
            .catch(error => console.log(error));
    }, []);

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