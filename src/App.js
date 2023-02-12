import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters: [
        {
          name: 'Linda',
          id: '1ae1'
        },
        {
          name: 'Joe',
          id: '1ae2'
        },
        {
          name: 'Lily',
          id: '1ae3'
        },
        {
          name: 'Andrei',
          id: '1ae4'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return(
              <h1 key={monster.id}>
                {monster.name}
              </h1>
            )
          })
        }
      </div>
    );
  }
  
}

export default App;
