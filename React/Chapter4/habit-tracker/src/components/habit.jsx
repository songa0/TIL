import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        //state 안의 count를 증가한뒤 state를 업데이트해야한다.
        this.setState({count:this.state.count+1});
    }
    handledecrement = () => {
        const count = this.state.count - 1;
        this.setState({count:count<0?0:count-1});
    }

    render() {
        return (
            <li className = "habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handledecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete"> 
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;