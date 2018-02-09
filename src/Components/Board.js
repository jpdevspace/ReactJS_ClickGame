import React, { Component } from 'react';
import zombies from '../data/zombies.json';
import Card from './Card';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            zombies: zombies
        };
    };

    render() {
        let eachZombie = this.state.zombies.map(zombie => <Card key={zombie.id} image={zombie.image} /> );

        return (
            <div id="board">
                {eachZombie}
            </div>
        );
    }
}

export default Board;
