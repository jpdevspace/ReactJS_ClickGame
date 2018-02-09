import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <img 
                className="card" 
                src={this.props.image}
            />
        );
    }
}

export default Card;