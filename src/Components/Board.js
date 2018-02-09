import React, { Component } from 'react';
import zombies from '../data/zombies.json';
import Card from './Card';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            zombies: zombies,
            clickedZombies: []
        };
    };

    handleAddnCompare = zombie => {
        // Checks if the last clicked zombie was clicked before
        if (this.state.clickedZombies.includes(zombie)) {
            alert("Wrong!");
        }
        else {
            // If it wasn't clicked before, creates a copy of the previously clicked zombies
            let newZombies = this.state.clickedZombies.slice();
            // adds the new zombie to that array
            newZombies.push(zombie);
            // Changes the state to include the newly clicked zombie
            this.setState({ clickedZombies: newZombies })
            console.log(newZombies);    // Debugging
        }
    } 

    render() {
        let eachZombie = this.state.zombies.map(zombie => 
            <Card 
                key={zombie.id}
                id={zombie.id} 
                image={zombie.image} 
                color={zombie.color}
                addCompare={this.handleAddnCompare}
            /> 
        );

        return (
            <div id="board">
                {eachZombie}
            </div>
        );
    }
}

export default Board;
