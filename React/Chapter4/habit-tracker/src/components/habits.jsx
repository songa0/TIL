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
        console.log({ habit });
    }
    handleDecrement = (habit) => {
       
    }
    handleDelete = (habit) => {
        
    }
    render() {  
        return (
            <ul>
                {
                    this.state.habits.map(item => ( 
                        <Habit key={item.id} habit={item} onIncrement={this.handleIncrement}/>
                    ))
                }
        </ul>)
            ;
    }
}

export default Habits;