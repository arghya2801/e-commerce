import React from 'react'
import { useState } from 'react';
import Item from './Item.jsx'

const ItemList = () => {
  const [itemData, setItemData] = React.useState([]);

  React.useEffect(() => {
      fetch('/products')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => setItemData(data.data)) // Ensure data.data is valid
          .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
      <>
          {itemData.map((item, i) => (
              <Item
                  key={`${item.product_id}-${i}`}
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