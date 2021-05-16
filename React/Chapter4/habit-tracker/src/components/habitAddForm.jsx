import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();//reloading되지 않음
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    }
    render() {

        return (
            <form action="" className="add-form" onSubmit={ this.onSubmit}>
                <input ref={this.inputRef} type="text" placeholder="Habit" className="habit-input" />
                <button className="habit-add" onClick={this.onSubmit }>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;