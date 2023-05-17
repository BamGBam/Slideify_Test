//import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; // Assuming the Profile component is in a file named Profile.js


/////////////First function that they have///////////
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Sepehr <code> Joooon</code> 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

////////////Making buttons
// function MyButton() {
//   return (
//     <button>Generate New Ima</button>
//   );
// }

function App() {
  return (
  <div>
    <div>
      <h1>Welcome to Slideify</h1>
      <button className="button-color">Generate New Image</button>
      <button>Generate second image</button>
    </div>
    <div><Profile /> {/* hiiiiii */}</div>
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
