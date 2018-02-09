import React, { Component } from 'react';

class Scoreboard extends Component {
    render() {
        return (
            <div id="scoreBoard">
            <h3>Current Score: <span id="score">5</span></h3>
            <h3>Previous Best Score: <span id="record">9</span></h3>
            <h3 id="message">You guessed correctly</h3>
            </div>
        );
    }
}

export default Scoreboard;