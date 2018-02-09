import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div 
                id={this.props.id}
                className="card" 
                style={{ backgroundImage: `url("${this.props.image}")` }}
                onClick={() => this.props.addCompare(this.props.id)}
            >
            </div>
        );
    }
}

export default Card;