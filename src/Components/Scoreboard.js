import React from 'react';

const Scoreboard = props => {
    return (
        <div id="scoreBoard">
            <h3>Current Score: {props.score}</h3>
            <h3>Record: {props.record}</h3>
            <h3 id="message">{props.message}</h3>
        </div>
    );
}


export default Scoreboard;