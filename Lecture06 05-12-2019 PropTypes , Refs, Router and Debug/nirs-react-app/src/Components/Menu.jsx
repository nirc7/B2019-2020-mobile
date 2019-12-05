import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                MENU
                <h3> user id: {this.props.match.params.userId}</h3>
            </div>
        );
    }
}

export default Menu;