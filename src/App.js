//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from './Profile'; // Assuming the Profile component is in a file named Profile.js
//import MyImages from './Users/bamda/Desktop/Personal\ informations/My\ Pics/SF\ copy.jpeg';
//import myImage from './SF.jpeg';
import ShoppingList from './CourseList'; 
import MyButton from './MyButton';




function App() {
  return (
  <div>
    <div>
      <h1>Welcome to Slideify</h1>
      <button className="button-color">Generate New Image</button>
      <button>Generate second image</button>
    </div>
    <div><ShoppingList /> {/* hiiiiii */}</div>
    <div><Profile /> {/* hiiiiii */}</div>
    <div><MyButton /> {/* hiiiiii */}</div>
    <div>
      <h1>Welcome to Slide2</h1>
      <button>Generate New Image</button>
      <button>Generate second image</button>
    </div>

  </div>
  
    
  );
  ///Adding photos
  
}




export default App;
