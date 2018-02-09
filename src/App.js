import React, { Component } from 'react';
// App Components
import Scoreboard from './Components/Scoreboard';
import Board from './Components/Board';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <h1>Click All Zombies</h1>
          <Scoreboard />
        </header>
        <section>
          <Board />
        </section>
      </div>
    );
  }
}

export default App;
