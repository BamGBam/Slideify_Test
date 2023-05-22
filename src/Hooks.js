import React from 'react';
import { useState } from 'react';
//making a function that count the number of Clicks
export default function Hooks() {
//Syntax to make it == 0

    //const [count, setCount] = useState(0);
    const [name, setName] = useState('Bamdad Goshtasbi');
    const [age, setAge] =  useState('25');

    const handleClick = () => {
        setName('Dev Bali');
        setAge('21');
    }

    // function handleClick() {
    //     setCount(count + 1);
    // }

return (
    <div>
        <p> My name is {name} </p>
    <button onClick={handleClick}>
      Click me 
    </button>

    </div>
  );
}
  
