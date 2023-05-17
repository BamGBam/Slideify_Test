import React from 'react';
const products = [
    { title: 'CS61A', isFruit: false, id: 1 },
    { title: 'CS61B', isFruit: false, id: 2 },
    { title: 'CS61C', isFruit: true, id: 3 },
    { title: 'CS70', isFruit: true, id: 3 },
    { title: 'CS188', isFruit: true, id: 3 },
    { title: 'CS161 Computer Security', isFruit: true, id: 3 },
    { title: 'CS186 DataBase', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }