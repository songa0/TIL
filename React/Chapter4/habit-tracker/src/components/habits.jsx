import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }
    handleDelete = (habit) => {
       this.props.onDelete(habit);
    }
    render() {
        const habits = this.props.habits;
        return (
            <ul>
                {
                    habits.map(item => (
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