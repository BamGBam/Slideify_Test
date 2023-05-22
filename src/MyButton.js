import React from 'react';
export default function MyButton() {
    function handleClick() {
      alert('See the projects');
    }
  
    return (
      <button onClick={handleClick}>
        See projects
      </button>
    );
  }