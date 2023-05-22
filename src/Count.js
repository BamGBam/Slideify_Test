import React from 'react';
import { useState } from 'react';
//making a function that count the number of Clicks
export default function count() {
//Syntax to make it == 0

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
  
