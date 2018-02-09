import React, { Component } from 'react';
// App Components
import Scoreboard from './Components/Scoreboard';
import Board from './Components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      record: 0,
      message: "I'm working"
    }
  }

  render() {
    return (
      <div>
        <header>
        <h1>Click All Zombies</h1>
          <Scoreboard 
            score={this.state.currentScore} 
            record={this.state.record} 
            message={this.state.message} 
          />
        </header>
        <section>
          <Board />
        </section>
      </div>
    );
  }
}

export default App;
