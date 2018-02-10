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
            // Reset the clicked zombies list
            this.setState({
                clickedZombies: []
            });
            // Run the gameOver function provided by the App component
            this.props.gameOver();
        }
        else {  // If it wasn't clicked before
            if (this.state.clickedZombies.length < this.state.zombies.length - 1) {
                // Creates a copy of the previously clicked zombies
                let newZombies = this.state.clickedZombies.slice();
                // adds the new zombie to that array
                newZombies.push(zombie);
                // Changes the state to include the newly clicked zombie
                this.setState({ clickedZombies: newZombies });
                // Run the scoreChange function to alert the App components
                this.props.scoreChange();
                // Shuffle the cards for the next round
                this.shuffleZombies(this.state.zombies)
                console.log(this.state.zombies.length);    // Debugging
            }
            else {
                // Reset the clicked zombies list
                this.setState({
                    clickedZombies: []
                });
                // Run the uWin function provided by the App component
                this.props.uWin();
            }
        }
    } 

    shuffleZombies = arr => {
        // Create a copy of the zombies array
        let shuffledZombies = arr.slice();
        // Randomize array using Durstenfeld shuffle algorithm
        for (let i = shuffledZombies.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = shuffledZombies[i];
            shuffledZombies[i] = shuffledZombies[j];
            shuffledZombies[j] = temp;
        }
        // Update the state
        this.setState({
            zombies: shuffledZombies
        });
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
            <div id="board" className={this.props.shake}>
                {eachZombie}
            </div>
        );
    }
}

export default Board;
