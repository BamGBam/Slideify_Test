//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState } from 'react';
import Profile from './Profile'; // Assuming the Profile component is in a file named Profile.js
//import MyImages from './Users/bamda/Desktop/Personal\ informations/My\ Pics/SF\ copy.jpeg';
//import myImage from './SF.jpeg';
import ShoppingList from './CourseList'; 
import MyButton from './MyButton';
import Counting from './Count'; 
import Hooks from './Hooks'; 






function App() {
  return (
  <div>

    <div><Profile /> {/* hiiiiii */}</div>
    <div><MyButton /> {/* hiiiiii */}</div>
    <div>
      <h1>Welcome to Slide2</h1>
      <button>Generate New Image</button>
      <button>Generate second image</button>
    </div>
    <div>
      <h1> Counting how many times you clicked</h1>
      <Counting/>
      <h1> Counting how many times you clicked for second times</h1>
      <Counting/>
    </div>
    <div>
      <h1>Welcome to My Website</h1>
      <button className="button-color">Generate New Image</button>
      <button>Generate second image</button>
    </div>
    
    <div>
      <h1>The hooks is :</h1>
      <Hooks/>
    </div>
    <h1> Courses that I took</h1>
    <div><ShoppingList /> {/* hiiiiii */}</div>

  </div>
  
    
  );
  ///Adding photos
  
}




export default App;
