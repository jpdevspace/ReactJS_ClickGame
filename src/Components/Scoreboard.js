import React from 'react';

// class Scoreboard extends Component {
//     render() {
//         return (
//             <div id="scoreBoard">
//                 <h3>Current Score: {this.props.score}</h3>
//                 <h3>Previous Best Score: {this.props.record}</h3>
//                 <h3 id="message">{this.props.message}</h3>
//             </div>
//         );
//     }
// }
const Scoreboard = props => {
    return (
        <div id="scoreBoard">
            <h3>Current Score: {props.score}</h3>
            <h3>Previous Best Score: {props.record}</h3>
            <h3 id="message">{props.message}</h3>
        </div>
    );
}


export default Scoreboard;