import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';

class App extends Component{
  state = {

  };

  render() {
    return (
      
      <>
        <header className="habit-header">Habit Tracker</header>
        <input type="text" placeholder="Habit" className="habit-input"/><button className="habit-add">Add</button>
        <Habits />
        <button className='habit-reset'>Reset All</button>
        
        </>
    )
      
      ;
      
      
  }
  
}

export default App;
