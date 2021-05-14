import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id:1, name: 'Reading', count: 0 },
            {id:2, name: 'Running', count: 0 },
            {id:3, name: 'Eating', count: 0 },
            
        ]
    };
    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits: habits });

    }
    handleDecrement = (habit) => {
       const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits: habits });
    }
    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits: habits });
    }
    render() {  
        return (
            <ul>
                {
                    this.state.habits.map(item => ( 
                        <Habit
                            key={item.id}
                            habit={item}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))
                }
        </ul>)
            ;
    }
}

export default Habits;