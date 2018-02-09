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
        if (this.state.clickedZombies.includes(zombie)) {
            alert("Wrong!");
        }
        else {
            let newZombies = this.state.clickedZombies.slice();
            newZombies.push(zombie);
            this.setState({ clickedZombies: newZombies })
            console.log(newZombies);
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
