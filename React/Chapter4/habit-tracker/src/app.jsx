import './app.css';
import React, { PureComponent } from 'react';
import Habits from './components/habits';
import Header from './components/header';
import HabitAddForm from './components/habitAddForm';

class App extends PureComponent{
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Eating', count: 0 },           
    ]

  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      } else return item;
    })
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (habit.id === item.id) {
        const count = habit.count - 1;
        return { ...habit, count: count<0? 0:count};
      } else return item;
    })
    this.setState({ habits });
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits: habits });
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count:0}];
    this.setState({ habits: habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }else return item;
    });

    this.setState({ habits: habits });
  }
  render() {
    return (
      
      <div>
        <Header totalCount={ this.state.habits.filter(item => item.count>0).length}/>
        <HabitAddForm onAdd={this.handleAdd}/>
        <Habits habits={this.state.habits}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete} />
        <button className='habit-reset' onClick={this.handleReset}>Reset All</button>
        
        </div>
    )
      
      ;
      
      
  }
  
}

export default App;
