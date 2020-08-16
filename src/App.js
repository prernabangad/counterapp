import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count: 0,
    };
  }
  AdditemHandle(){
    this.setState({
      count: this.state.count + 1,

    });
  }
  removeHandle(){
    this.setState({
      count: this.state.count - 1,

    });
  }

  resetHandle(){
    this.setState({
      count: 0,

    });
  }
  render(){
   return (
    <div className="App"><h1>Counter App</h1>
      <h2>{this.state.count}</h2> 
      <button 
        onClick={() => {
        this.AdditemHandle();
      }}
      >Additem
       `</button>
       <button
       onClick={() => {
        this.removeHandle();
      }}>Remove
      </button>
      <button
       onClick={() => {
        this.resetHandle();
      }}> Reset </button>
     </div>
    );
  }
}

export default App;
