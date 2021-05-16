import React, { PureComponent } from 'react';

class Header extends PureComponent {
    render() {
        
        console.log('habitHeader');
        return (
            <header className="habit-header">
                <i className="fas fa-leaf habit-logo"></i>
                <span className='habit-title'>Habit Tracker</span>
                <span className='habit-total-count'>{ this.props.totalCount}</span>
            </header>
        );
    }
}

export default Header;