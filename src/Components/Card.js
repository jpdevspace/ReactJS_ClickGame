import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div 
                id={this.props.id}
                className="card" 
                // style={{backgroundImage: this.props.image}}
                style={{backgroundColor: this.props.color}}
                onClick={() => this.props.addCompare(this.props.id)}
            >
            </div>
        );
    }
}

export default Card;