import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';

class App extends Component{
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Eating', count: 0 },           
    ]

  };

  handleClickHabit() {
    
  }
  render() {
    return (
      
      <>
        <header className="habit-header">
          <i className="fas fa-leaf"></i> 
          <span className='habit-title'>Habit Tracker</span>
          <span className='habit-total-count'>0</span>
        </header>
        <input type="text" placeholder="Habit" className="habit-input"/><button className="habit-add">Add</button>
        <Habits habits={this.state.habits} onClick={ this.handleClickHabit}/>
        <button className='habit-reset'>Reset All</button>
        
        </>
    )
      
      ;
      
      
  }
  
}

export default App;
