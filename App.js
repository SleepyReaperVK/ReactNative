import logo from './logo.svg';
import './App.css';
import React , { Component } from  'react';

// Second way 

const App =(props) =>{
  return (
    <div className="f1 tc">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code><p>{this.props.greetings}<br/> cool</p></code> and save to reload.
        </p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

// first way

// class App extends Component {
//   render(){
//   return (
//     <div className="f1 tc">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code><p>{this.props.greetings}<br/> cool</p></code> and save to reload.
//         </p>
//         <a
//           className="link"
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
// }

export default App;
